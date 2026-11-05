# CoLa A and CoLa B Protocol: SICK Command Language Reference

> SICK CoLa protocol reference: CoLa A (ASCII) and CoLa B (binary) framing, checksum, command types, variable types, TCP ports 2111 and 2112, and error codes.

Source: https://sickag.github.io/sick_lidar_developer_guide/configuration/cola-interface/

# CoLa Interface {#cola-interface}

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

CoLa (Command Language) is SICK's telegram protocol for reading and writing sensor parameters, calling methods, and subscribing to events over TCP. Use it for PLCs and existing SICK integrations; for new integrations, prefer the [REST API](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/).

<p class="table-caption" markdown>**CoLa Interface:** variant, encoding, TCP port, framing, and checksum.</p>

| Variant | Encoding | TCP port | Framing | Checksum |
| --- | --- | --- | --- | --- |
| CoLa A | ASCII | `2111` | `<STX>` … `<ETX>` (`02` … `03`) | None |
| CoLa B | Binary | `2112` | `02 02 02 02` + 4-byte big-endian length | 1-byte XOR |

On picoScan100, CoLa A and CoLa B (together called CoLa1) can be disabled for security; see [Cybersecurity](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/cybersecurity/#legacy-protocols-cola).

## Command Basics {#command-basics}

Every telegram starts with a command type, followed by a space and the command
name. The device answers with the matching answer type, or with `sFA` and an
[error code](https://sickag.github.io/sick_lidar_developer_guide/configuration/cola-interface/#cola-error-codes):

<p class="table-caption" markdown>**Command Basics:** command type, request, answer, and hex value of the request.</p>

| Command type | Request | Answer | Request in hex |
| --- | --- | --- | --- |
| Read a variable | `sRN` | `sRA` | `73 52 4E` |
| Write a variable | `sWN` | `sWA` | `73 57 4E` |
| Call a method | `sMN` | `sAN` | `73 4D 4E` |
| Register for an event | `sEN` | `sEA`, then `sSN` per event | `73 45 4E` |

<p class="table-caption" markdown>**Command Basics:** framing element, CoLa A, and CoLa B.</p>

| Element | CoLa A (ASCII) | CoLa B (binary) |
| --- | --- | --- |
| Start | `<STX>` = `02` | `02 02 02 02` + 4-byte length |
| End | `<ETX>` = `03` | 1-byte XOR checksum |
| Separator | `{SPC}` = `20` between all parts | `20` after the command name only |
| Numbers | Hexadecimal text, decimal with `+` | Binary, big-endian (most significant byte first), for example Uint_16 7 = `00 07` |

## ASCII Telegram (CoLa A) {#ascii-telegram-cola-a}

CoLa A sends the command and its parameters as text. It is convenient for manual
tests; for PLCs, prefer CoLa B because CoLa A telegrams have a variable length.

- **Numbers are hexadecimal by default.** Write decimal values with a leading `+`:
  25 Hz = `+2500` = `9C4`. Fixed values with a coded meaning are always hexadecimal.
- **Watch values from 10 upwards.** `10` and `010` are both read as 0x10 = 16;
  only `+10` is decimal 10. Write every decimal value greater than 9 with `+`
  (for example `+10`, `+48`, `+2500`).
- **Separate every part with a space.** Leading zeros are removed, so the space is the only delimiter.
- **Strings have a hexadecimal length prefix**, for example `9 MyScanner` or `14 picoScan150 26390800` (0x14 = 20 characters).
- **Answers are always hexadecimal**, regardless of the format you sent. Signed
  values use two's complement, for example `FFFFFFFB` = -5 for an Int_32.
- You can also send the telegram as hex bytes by converting every character, including digits, through the ASCII table.

## Binary Telegram (CoLa B) {#binary-telegram-cola-b}

CoLa B is recommended for PLCs: the data is about half the size of CoLa A, and the length field makes parsing simple.

- **Header:** four STX bytes, `02 02 02 02`.
- **Length:** 4 bytes, big-endian, the number of data bytes (maximum 2³² − 1 = 4,294,967,295).
- **Data:** the command as ASCII bytes, a space (`20`), then the parameters as binary values without separators.
- **Checksum:** 1 byte, the XOR of all data bytes.

## Example: Log in with SetAccessMode {#example-log-in-with-setaccessmode}

The following telegram sets the user level "Service" (`4`) in both variants.

<p class="table-caption" markdown>**Example: Log in with SetAccessMode:** telegram part, CoLa A, and CoLa B.</p>

| Telegram part | CoLa A (ASCII, hex) | CoLa B (binary) |
| --- | --- | --- |
| Start | `<STX> (02)` | `02 02 02 02` + length `00 00 00 17` (23 data bytes) |
| Command type and space | `sMN{SPC} (73 4D 4E 20)` | `73 4D 4E 20` |
| Command and space | `SetAccessMode{SPC}` (hex as CoLa B) | `53 65 74 41 63 63 65 73 73 4D 6F 64 65 20` |
| User level "Service" | `04{SPC} (30 34 20)` | `04` |
| Password hash | `<password hash>`, 8 hex characters | `<password hash>`, 4 bytes |
| End | `<ETX> (03)` | XOR of the 23 data bytes |

The default passwords are documented in the operating instructions of your device. Do not pass them on, and change them during commissioning.

## Python Example: Read, Write, and Call a Method {#python-example-read-write-and-call-a-method}

The following scripts read the device name with `sRN LocationName`, log in with
the method `sMN SetAccessMode`, and write a new name with `sWN LocationName`.
Choose the tab for CoLa A or CoLa B; each script runs on its own and uses only
the Python standard library. Enter the IP address and the password hash of your
device. Written values are lost on restart unless you save them with
`sMN mEEwriteall`.

=== "CoLa A (port 2111)"

    ```python
    import socket

    HOST = "192.168.0.1"  # IP address of the device
    LEVEL = 4  # user level Service
    PASSWORD_HASH = 0x00000000  # password hash of the user level Service, see the operating instructions


    def receive(sock: socket.socket, count: int) -> bytes:
        data = b""
        while len(data) < count:
            chunk = sock.recv(count - len(data))
            if not chunk:
                raise ConnectionError("connection closed by the device")
            data += chunk
        return data


    def cola_a(sock: socket.socket, telegram: str) -> str:
        sock.sendall(b"\x02" + telegram.encode("ascii") + b"\x03")
        reply = receive(sock, 1)
        while not reply.endswith(b"\x03"):
            reply += receive(sock, 1)
        return reply[1:-1].decode("latin-1")


    # Parameters as text, numbers in hex, strings with a hex length prefix
    with socket.create_connection((HOST, 2111), timeout=5) as sock:
        print(cola_a(sock, "sRN LocationName"))  # read:   sRA LocationName 8 LRS4581R
        print(cola_a(sock, f"sMN SetAccessMode {LEVEL} {PASSWORD_HASH:08X}"))  # method: sAN SetAccessMode 1
        print(cola_a(sock, "sWN LocationName 8 MyDevice"))  # write:  sWA LocationName
    ```

=== "CoLa B (port 2112)"

    ```python
    import socket

    HOST = "192.168.0.1"  # IP address of the device
    LEVEL = 4  # user level Service
    PASSWORD_HASH = 0x00000000  # password hash of the user level Service, see the operating instructions


    def receive(sock: socket.socket, count: int) -> bytes:
        data = b""
        while len(data) < count:
            chunk = sock.recv(count - len(data))
            if not chunk:
                raise ConnectionError("connection closed by the device")
            data += chunk
        return data


    def cola_b(sock: socket.socket, data: bytes) -> bytes:
        checksum = 0
        for byte in data:
            checksum ^= byte
        sock.sendall(b"\x02\x02\x02\x02" + len(data).to_bytes(4, "big") + data + bytes([checksum]))
        length = int.from_bytes(receive(sock, 8)[4:], "big")
        return receive(sock, length + 1)[:-1]  # without the checksum byte


    # Parameters as binary big-endian values without separators
    with socket.create_connection((HOST, 2112), timeout=5) as sock:
        print(cola_b(sock, b"sRN LocationName"))  # read:   b'sRA LocationName \x00\x08LRS4581R'
        print(cola_b(sock, b"sMN SetAccessMode " + bytes([LEVEL]) + PASSWORD_HASH.to_bytes(4, "big")))  # method: b'sAN SetAccessMode \x01'
        name = b"MyDevice"
        print(cola_b(sock, b"sWN LocationName " + len(name).to_bytes(2, "big") + name))  # write:  b'sWA LocationName '
    ```

## Validate a CoLa B Checksum {#validate-a-cola-b-checksum}

One TCP read is not necessarily one complete telegram. Buffer the incoming
bytes, find the header `02 02 02 02`, read the 4-byte big-endian length, and wait
for the whole frame: header and length (8 bytes), data, and checksum (1 byte),
so `9 + length` bytes in total. The checksum is the XOR of the data bytes only:

```python
xor_sum = 0
for byte in frame[8:-1]:
    xor_sum ^= byte

checksum_valid = xor_sum == frame[-1]
```

## Device-Specific Telegram Listing {#device-specific-telegram-listing}

For device-specific commands and parameter telegrams, see the [LRS4000 Telegram Listing](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/), [multiScan100 Telegram Listing](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/), [multiScan200 Telegram Listing](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/), and picoScan100 ([picoScan120](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/), [picoScan150](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/)) Telegram Listings.

Every write command (`sWN`) has a read (`sRN`) counterpart, even if the Telegram Listing does not describe it. Use it to verify the current value, for example read the IP address with `sRN EIIpAddr`.

## Variable Types {#variable-types}

All lengths are in bytes.

<p class="table-caption" markdown>**Variable Types:** variable type, length, value range, and sign.</p>

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
| Enum_8 | 1 | Values from a defined list of choices (0 … 255) | No |
| Enum_16 | 2 | Values from a defined list of choices (0 … 65,535) | No |
| String | Context-dependent | Characters without terminating zero | |
| FlexString | 2 + n | Uint_16 current length, followed by n characters | |
| Real | 4 | Float according to IEEE 754 (see the [IEEE 754 converter](https://www.h-schmidt.net/FloatConverter/IEEE754.html)) | Yes |

<p class="table-caption" markdown>**Variable Types:** compound type and description.</p>

| Type | Description |
| --- | --- |
| *Struct* | Sequence of other types: basic types, structs, or arrays. |
| *Array* | Fixed number of repetitions of one type; the type can again be a basic type, struct, or array (n-dimensional). |
| *Flex Array* | Like an array, but with a variable length up to a defined maximum. The current length is sent as a Uint_16 before the elements. |

## CoLa Error Codes {#cola-error-codes}

An `sFA` answer reports a SOPAS error. CoLa A returns the code as hexadecimal
text, for example `sFA F` for 15; CoLa B returns it as a 2-byte value, for
example `73 46 41 00 0F`.

<p class="table-caption" markdown>**CoLa Error Codes:** symbol, description, decimal, and hexadecimal value.</p>

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
