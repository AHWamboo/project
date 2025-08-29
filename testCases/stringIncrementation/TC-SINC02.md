# TC-SINC02 Input overflow wrap by digit length

## Preconditions

1. [TC-SINC00](TC-SINC00.md) was run.

## Steps

1.  Run the following inputs (max value for each digit length):

| #   | Input      |
| --- | ---------- |
| 1   | `A9`       |
| 2   | `QZ99`     |
| 3   | `ABC999`   |
| 4   | `ABCD9999` |

## Expected Result (automated and manual tests)

Ad 1.

| #   | Expected   |
| --- | ---------- |
| 1   | `A0`       |
| 2   | `QZ00`     |
| 3   | `ABC000`   |
| 4   | `ABCD0000` |

## Test automation

Automated, [link](/link to automation)
