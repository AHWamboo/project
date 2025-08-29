# TC-SINC06 Input boundary coverage

## Preconditions

1. [TC-SINC00](TC-SINC00.md) was run.

## Steps

1.  Run the following inputs:

| #   | Input      | Purpose                        |
| --- | ---------- | ------------------------------ |
| 1   | `A0`       | Simple increment               |
| 2   | `A9`       | Resets to 0 after max (9)      |
| 3   | `Ab07`     | Keeps two-digit format         |
| 4   | `Ab99`     | `99` resets to `00`            |
| 5   | `AbC120`   | Letters stay, number increases |
| 6   | `AbC999`   | `999` resets to `000`          |
| 7   | `AbCd0099` | Carry over between digits      |
| 8   | `AbCd9999` | `9999` resets to `0000`        |

## Expected Result (automated and manual tests)

Ad 1.

| #   | Expected   |
| --- | ---------- |
| 1   | `A1`       |
| 2   | `A0`       |
| 3   | `Ab08`     |
| 4   | `Ab00`     |
| 5   | `AbC121`   |
| 6   | `AbC000`   |
| 7   | `AbCd0100` |
| 8   | `AbCd0000` |

## Test automation

Automated, [link](/link to automation)
