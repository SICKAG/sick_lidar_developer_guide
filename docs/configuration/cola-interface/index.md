# CoLa A and CoLa B Protocol: SICK Command Language Reference

> SICK CoLa protocol reference: CoLa A (ASCII) and CoLa B (binary) framing, checksum, command types, variable types, TCP ports 2111 and 2112, and error codes.

Source: https://sickag.github.io/sick_lidar_developer_guide/configuration/cola-interface/

# CoLa Interface

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

CoLa (Command Language) is SICK's telegram protocol for reading and writing sensor parameters, calling methods, and subscribing to events over TCP. Use it for PLCs and existing SICK integrations; for new integrations, prefer the [REST API](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/).

| Variant | Encoding | TCP port | Framing | Checksum |
| --- | --- | --- | --- | --- |
| CoLa A | ASCII | `2111` | `<STX>` … `<ETX>` (`02` … `03`) | None |
| CoLa B | Binary | `2112` | `02 02 02 02` + 4-byte big-endian length | 1-byte XOR |

On picoScan100, CoLa A and CoLa B (together called CoLa1) can be disabled for security; see [Cybersecurity](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/cybersecurity/#legacy-protocols-cola).

## Binary Telegram (CoLa B)

A CoLa B telegram has four parts: header, data length, data, and checksum. All values are bytes, shown in hexadecimal. CoLa B is recommended for PLCs: the transmitted data is about half the size of CoLa A, and the length field makes parsing simple.

- Header: four STX bytes, `02 02 02 02`.
- Data length: 4 bytes, big-endian, the number of bytes in the data part. The maximum is 2³² − 1 = 4,294,967,295 bytes.
- Data: the command as ASCII bytes, followed by the parameters as binary values. There is always a space (`20`) between the command and the parameters, but not between parameter values.
- Checksum: 1 byte, the XOR of all bytes in the data part.

### Validate a CoLa B Checksum

CoLa B is transported over TCP, so one TCP read is not necessarily one complete
telegram. Buffer incoming bytes, locate the four-byte sync header, read the
following 4-byte big-endian payload length, and wait until the complete frame
has arrived. The frame consists of the 8-byte header and length, the payload,
and one checksum byte; therefore its total size is `9 + payload_length`.

The checksum is the XOR of every payload byte, excluding the sync header,
length field, and checksum byte. For a complete frame in a byte array
`frame`, calculate it as follows:

```python
xor_sum = 0
for byte in frame[8:-1]:
    xor_sum ^= byte

checksum_valid = xor_sum == frame[-1]
```

The following dummy `LMDscandata` response is an example captured from a
picoScan150 with firmware V2.1.0. It demonstrates frame separation and XOR
validation; it contains a small number of beams and is not a production
measurement sample:

<details markdown="1">
<summary>Show full Python checksum example</summary>

```python
tcp_payload = [
    0x02, 0x02, 0x02, 0x02, 0x00, 0x00, 0x00, 0x77,
    0x73, 0x52, 0x41, 0x20, 0x4c, 0x4d, 0x44, 0x73,
    0x63, 0x61, 0x6e, 0x64, 0x61, 0x74, 0x61, 0x20,
    0x00, 0x01, 0x00, 0x01, 0x01, 0x64, 0x72, 0x18,
    0x00, 0x00, 0x59, 0x89, 0x69, 0x97, 0xbb, 0x9d,
    0xc5, 0x02, 0xbb, 0x9e, 0x82, 0xcc, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x05, 0xdc,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x44, 0x49, 0x53, 0x54, 0x31, 0x40, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0d, 0xe2,
    0xb0, 0x13, 0x88, 0x00, 0x03, 0x00, 0x00, 0x3a,
    0xdb, 0x3a, 0xda, 0x00, 0x01, 0x52, 0x53, 0x53,
    0x49, 0x31, 0x3f, 0x80, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x0d, 0xe2, 0xb0, 0x13, 0x88,
    0x00, 0x03, 0x00, 0x35, 0x39, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xbb,
]

xor_sum = 0
for byte in tcp_payload[8:-1]:
    xor_sum ^= byte

if xor_sum == tcp_payload[-1]:
    print("Checksum valid")
else:
    print("Checksum invalid")
```

</details>

The length bytes in this sample are `00 00 00 77`, which encode a 119-byte
payload in big-endian order. The checksum is `BB`.

**Example: Binary telegram**

| Component | Value |
| --- | --- |
| Header | `02 02 02 02` |
| Length | `00 00 00 17` |
| Data | `73 4D 4E 20 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 03 F4 72 47 44` |
| CS | `B3` |

This is an example telegram for setting the user level "Authorized Client":

- Header = 02 02 02 02
- Length = 23 bytes (17h)
- Data:
  - 73 4D 4E 20 = sMN = start of SOPAS command (and space)
  - 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 = SetAccessMode = the actual command for setting the user level (and space)
  - 03 = fixed Hex value meaning user level "Authorized Client"
  - F4 72 47 44 = fixed Hex value, serving as password for the selected user level "Authorized Client"
- Checksum = B3, the XOR of all 23 data bytes

## ASCII Telegram (CoLa A)

CoLa A is the plain-text alternative. It is convenient for manual tests and parametrization. For PLCs, CoLa B is still recommended because CoLa A telegrams have a variable length.

A CoLa A telegram has two parts: the framing and the data part. `<STX>` (`02`) starts and `<ETX>` (`03`) ends each telegram.

The data part contains the command in plain text, then the parameter values. Values are hexadecimal by default, or decimal with a leading `+`. Fixed values with a specific meaning are always hexadecimal. Example: 25 Hz = `+2500` (decimal) = `9C4` (hex).

Leading zeros are removed in CoLa A, so a space is required between every command part and every parameter.

Without the `+` sign, a numeric parameter is read as **hexadecimal**. For single digits 0-9 this makes no difference, but from 10 upwards it does: `10` and `010` are both read as 0x10 = 16, while `+10` is decimal 10. Write every decimal value greater than 9 with a leading `+` (for example `+10`, `+48`, `+2500`).

You can also send the whole telegram as hex bytes, converting every character, including digits, through the ASCII table.

The device always answers with parameter values in hexadecimal, regardless of the format you sent.

**Example: ASCII telegram**

| Format | Start | Data | Stop |
| --- | --- | --- | --- |
| ASCII | `<STX>` | `sMN{SPC}SetAccessMode{SPC}03{SPC}F4724744` | `<ETX>` |
| Hex | `02` | `73 4D 4E 20 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 30 33 20 46 34 37 32 34 37 34 34` | `03` |

This is again an example telegram for setting the user level "Authorized Client". As only fixed hexadecimal parameter values are needed, the option to use parameter values in decimal code with special indicator cannot be applied here:

- Framing = <STX> = telegram start = 02 (Hex)
- Data:
  - sMN = start of SOPAS command (and blank) = 73 4D 4E 20 (Hex)
  - SetAccessMode = the actual command for setting the user level (and blank) = 53 65 74 41 63 63 65 73 73 4D 6F 64 65 20 (Hex)
  - 03 = fixed Hex value meaning user level "Authorized Client" (and blank) = 30 33 20 (Hex)
  - F4 72 47 44 = fixed Hex value, serving as password for the selected user level "Authorized Client" = 46 34 37 32 34 37 34 34 (Hex)
- Framing = <ETX> = telegram stop = 03 (Hex)

## Command Basics

Index-based SOPAS communication can be identified by telegrams that begin with sRI, sWI, sMI, sAI, sEI, or sSI. Parallel use of one port can be confusing, so use separate ports.

Every response telegram starts with a separate framed string:

<STX>sSI 2 1<ETX><STX>"Answer"<ETX>

| Description | Value ASCII | Value Hex | Value Binary |
| --- | --- | --- | --- |
| Start of text | `<STX>` | `02` | `02 02 02 02 + given length` |
| End of text | `<ETX>` | `03` | Calculated checksum |
| Read | `sRN` | `73 52 4E` | |
| Write | `sWN` | `73 57 4E` | |
| Method | `sMN` | `73 4D 4E` | |
| Event | `sEN` | `73 45 4E` | |
| Answer | `sRA<br>sWA<br>sAN<br>sEA<br>sSN` | `73 52 41<br>73 57 41<br>73 41 4E<br>73 45 41<br>73 53 4E` | |
| Space | `{SPC}` | `20` | `20` |

If values are divided into two parts (e.g. measurement data), they are documented according to LSB 0 (e.g. 00 07), output however is according to MSB (e.g. 07 00).

## Device-Specific Telegram Listing

For device-specific commands and parameter telegrams, see the [LRS4000 Telegram Listing](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/cola-telegram-listing/), [multiScan100 Telegram Listing](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/cola-telegram-listing/), [multiScan200 Telegram Listing](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/cola-telegram-listing/), and [picoScan100 Telegram Listing](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/cola-telegram-listing/).

Every write command (`sWN`) has a read (`sRN`) counterpart, even if the Telegram Listing does not describe it. Use it to verify the current value, for example read the IP address with `sRN EIIpAddr`.

## Variable Types

| Variable type | Length (byte) | Value range | Sign |
| --- | --- | --- | --- |
| Bool_1 | 1 | 0 or 1 | No |
| Uint_8 | 1 | 0 … 255 | No |
| Int_8 | 1 | -128 … +127 | Yes |
| Uint_16 | 2 | 0 … 65,535 | No |
| Int_16 | 2 | -32,768 … +32,767 | Yes |
| Uint_32 | 4 | 0 … 4,294,967,295 | No |
| Int_32 | 4 | -2,147,483,648 … +2,147,483,647 | Yes |
| ULInt_64 | 8 | 0 … 18,446,744,073,709,551,615 | No |
| Enum_8 | 1 | Certain values defined in a list of Choices (0 … 255) | No |
| Enum_16 | 2 | Certain values defined in a list of Choices (0 … 65535) | No |
| String | Context-dependent | Strings are not terminated in zeroes | |
| FlexString | array of visible characters with preceding current length<br>(UInt length) (array of 8 bit) | See description of String and FlexArray | |
| Real | 4 | Float according to IEEE 754 (see the [IEEE 754 converter](https://www.h-schmidt.net/FloatConverter/IEEE754.html)) | Yes |

Data length is always given in bytes.

| Type | Description |
| --- | --- |
| *Struct* | A structure is a sequence of further types. These types can be of a BasicType, Structs again or an Array. |
| *Array* | An Array is a repetition of a type. The length of the array is defined with each Array. The types can be of a BasicType, a Struct or an Array again (n-dimensional). |
| *Flex Array* | A FlexArray is a repetition of a type with a variable length. The maximum length of the array is defined with each FlexArray. The current length of the FlexArray is transferred as a UInt preceding the Array itself. The types can be of a BasicType, a Struct or an Array again (n-dimensional). |

## CoLa Error Codes

An `sFA` response reports a SOPAS error. The error code is returned as a
decimal value in CoLa A and as a hexadecimal value in CoLa B.

| Symbol | Description | Dec. | Hex. |
| --- | --- | ---: | ---: |
| `Sopas_Ok` | No error | 0 | `0` |
| `Sopas_Error_METHODIN_ACCESSDENIED` | Wrong user level; access to the method is not allowed | 1 | `1` |
| `Sopas_Error_METHODIN_UNKNOWNINDEX` | Method index is unknown | 2 | `2` |
| `Sopas_Error_VARIABLE_UNKNOWNINDEX` | Variable index is unknown | 3 | `3` |
| `Sopas_Error_LOCALCONDITIONFAILED` | A local condition was violated, such as a value outside the allowed range | 4 | `4` |
| `Sopas_Error_INVALID_DATA` | Invalid variable data; deprecated and no longer used | 5 | `5` |
| `Sopas_Error_UNKNOWN_ERROR` | Unknown error; deprecated | 6 | `6` |
| `Sopas_Error_BUFFER_OVERFLOW` | Communication buffer was too small for the serialized data | 7 | `7` |
| `Sopas_Error_BUFFER_UNDERFLOW` | More data was expected, but the buffer could not be filled | 8 | `8` |
| `Sopas_Error_ERROR_UNKNOWN_TYPE` | Variable has an unknown type | 9 | `9` |
| `Sopas_Error_VARIABLE_WRITE_ACCESSDENIED` | Variable is read-only | 10 | `A` |
| `Sopas_Error_UNKNOWN_CMD_FOR_NAMESERVER` | Nameserver does not understand the command | 11 | `B` |
| `Sopas_Error_UNKNOWN_COLA_COMMAND` | Command is not defined by the CoLa specification | 12 | `C` |
| `Sopas_Error_METHODIN_SERVER_BUSY` | Another command is already being processed | 13 | `D` |
| `Sopas_Error_FLEX_OUT_OF_BOUNDS` | Array was accessed beyond its maximum length | 14 | `E` |
| `Sopas_Error_EVENTREG_UNKNOWNINDEX` | Event index is unknown | 15 | `F` |
| `Sopas_Error_COLA_A_VALUE_OVERFLOW` | Value is too large for the field | 16 | `10` |
| `Sopas_Error_COLA_A_INVALID_CHARACTER` | Character is unknown or not alphanumeric | 17 | `11` |
| `Sopas_Error_OSAI_NO_MESSAGE` | No operating-system message could be created for a GET request | 18 | `12` |
| `Sopas_Error_OSAI_NO_ANSWER_MESSAGE` | No operating-system message could be created for a PUT request | 19 | `13` |
| `Sopas_Error_INTERNAL` | Internal firmware error | 20 | `14` |
| `Sopas_Error_HubAddressCorrupted` | SOPAS hub address is too short or too long | 21 | `15` |
| `Sopas_Error_HubAddressDecoding` | SOPAS hub address has invalid syntax | 22 | `16` |
| `Sopas_Error_HubAddressAddressExceeded` | Hub address contains too many hubs | 23 | `17` |
| `Sopas_Error_HubAddressBlankExpected` | Expected blank is missing in the hub address | 24 | `18` |
| `Sopas_Error_AsyncMethodsAreSuppressed` | Asynchronous methods are suppressed on the device | 25 | `19` |
| `Sopas_Error_ComplexArraysNotSupported` | Device does not support the received complex array | 26 | `1A` |
