# TC-SINC05 Input validation

## Preconditions

1. [TC-SINC00](TC-SINC00.md) was run.

## Steps

1.  Run the following inputs:

| #   | Input        | Reason                          |
| --- | ------------ | ------------------------------- |
| 1   | `ABC`        | Missing digits                  |
| 2   | `123`        | Missing letters                 |
| 3   | `ABCDE1`     | >4 letters                      |
| 4   | `AB12345`    | >4 digits                       |
| 5   | `AB-12`      | Disallowed character (dash)     |
| 6   | `AB 12`      | Space                           |
| 7   | `AB_12`      | Underscore                      |
| 8   | `A1B2`       | Digits mixed inside letter part |
| 9   | \`\` (empty) | Empty input                     |
| 10  | ` AB12`      | Leading whitespace              |
| 11  | `AB12 `      | Trailing whitespace             |
| 12  | `ĄB12`       | Non‑ASCII character             |

## Expected Result (automated and manual tests)

Ad 1.

All return "Error".

## Test automation

Automated, [link](/link to automation)
