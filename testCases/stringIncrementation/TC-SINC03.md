# TC-SINC03 Input carry within numeric part (leading zeros preserved)

## Preconditions

1. [TC-SINC00](TC-SINC00.md) was run.

## Steps

1.  Run the following inputs (max value for each digit length):

| #   | Input    |
| --- | -------- |
| 1   | `AB0099` |
| 2   | `ab0999` |
| 3   | `Z0079`  |

## Expected Result (automated and manual tests)

Ad 1.

| #   | Expected |
| --- | -------- |
| 1   | `AB0100` |
| 2   | `ab1000` |
| 3   | `Z0080`  |

## Test automation

Automated, [link](/link to automation)
