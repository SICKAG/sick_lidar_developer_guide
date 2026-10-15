# Checksums

The `LFTchecksum` is a read-only REST resource that returns MD5 digests over four independent software and configuration areas of the device. It lets you verify at any time that nothing has changed since a known-good reference: detect unintended parameter changes, confirm a configuration file applied correctly, or check that a firmware update touched only the areas it should.

## Reading It

No authentication required:

```http
GET /api/LFTchecksum
```

```json
{
  "header": { "status": 0, "message": "Ok" },
  "data": { "LFTchecksum": {
    "MD5SumOK":       true,
    "MD5LinuxRoot":   "8439a3f5bb209f3d51557d509169ec60",
    "MD5App":         "304f9a18302e2b635da2c2c220463119",
    "MD5Calibration": "bc5e5d5df638dc45c85937c8c67b59d7",
    "MD5Parameters":  "07f18c8032e24ac65ca0ed7c04be6a62"
  } }
}
```

## The Four Sub-Checksums

<p class="table-caption" markdown>**The Four Sub-Checksums:** field, covers, and changes when….</p>

| Field            | Covers                            | Changes when…                                                                          |
| ---------------- | --------------------------------- | -------------------------------------------------------------------------------------- |
| `MD5LinuxRoot`   | Linux root filesystem (OS layer)  | A firmware update modifies the OS partition                                            |
| `MD5App`         | Application binary and libraries  | A firmware update installs a new application version                                   |
| `MD5Calibration` | Factory calibration data          | Calibration is recalculated/overwritten (factory service only)                         |
| `MD5Parameters`  | Persistent parameter set (EEPROM) | Parameters are persisted via `WriteEeprom`, or a config file is imported and persisted |
| `MD5SumOK`       | Overall integrity flag            | `false` if any of the four fails its internal verification                             |

## RAM vs. Persistent Storage

The device keeps two parameter states at once:

<p class="table-caption" markdown>**RAM vs. Persistent Storage:** parameter state, storage location, persistence after reboot, and effect on `MD5Parameters`.</p>

| State          | Where          | Survives reboot?                                                                    | Reflected in `MD5Parameters`?             |
| -------------- | -------------- | ----------------------------------------------------------------------------------- | ----------------------------------------- |
| Working copy   | RAM            | No (a `RebootDevice` flushes RAM to EEPROM first, so it survives a software reboot) | No, until `WriteEeprom` or `RebootDevice` |
| Persisted copy | EEPROM / flash | Yes                                                                                 | Yes                                       |

Every REST write modifies only the RAM copy. `MD5Parameters` (the persisted digest) does not change until `WriteEeprom` is called, or the device is rebooted via `RebootDevice` (which persists RAM first). A `SoftReset` or a hard power-cycle discards unsaved RAM changes.

After a REST write, reading an unchanged `MD5Parameters` means the change is still in RAM only, not that the device is unmodified. Persist with `WriteEeprom` (or reboot) to make the change durable and visible in the checksum.

## When Does Each Sub-Checksum Change?

The following table shows the behavior of a picoScan150 (● = changed, - = unchanged):

<p class="table-caption" markdown>**When Does Each Sub-Checksum Change?** Scenario and resulting change of the LinuxRoot, app, calibration, and parameters checksums.</p>

| Scenario | LinuxRoot | App | Calibration | Parameters |
| --- | --- | --- | --- | --- |
| Two consecutive reads, no operation | - | - | - | - |
| Change a parameter in RAM only (no `WriteEeprom`) | - | - | - | - |
| Change in RAM, then `SoftReset` | - | - | - | - |
| Change in RAM, then `RebootDevice` (persists first) | - | - | - | ● |
| Change + `WriteEeprom` | - | - | - | ● |
| `CreateParameterBackup` → `RestoreParameterBackup`, same file, no content change | - | - | - | - |
| `LoadApplicationDefaults` (destructive) | - | - | - | ● |
| Firmware upgrade | ● | ● | - | - |
| Firmware downgrade | ● | ● | - | - |

`MD5Calibration` does not change through normal end-user operations. A change there indicates a factory calibration update or an unexpected write to the calibration partition, so treat it as a red flag.

## A Practical Integrity Workflow

1. Record all four hashes from a known-good device (the reference).
2. After any change (a config push, a [restore](../configuration/configuration-backup-and-restore.md), a [firmware update](./firmware-update.md)), read `LFTchecksum` again.
3. Compare field by field: a firmware update should move `MD5LinuxRoot` + `MD5App` only; a persisted config change should move `MD5Parameters` only; `MD5Calibration` should never move.
4. Anything else is unexpected: investigate before putting the device back into service.

Compact and MSGPACK telegrams carry a CRC32 per packet (see [Compact Format](../data-streaming/compact-format.md#frame-layout)); CoLa B telegrams carry a 1-byte XOR checksum. The `LFTchecksum` covers the stored software and configuration, which complements these on-the-wire checks.
