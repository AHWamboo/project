import { test } from "@pwHelpers/playwrightTest";
import { paths } from "./data/paths";
import { expect } from "@playwright/test";
import { todayDate } from "@pwHelpers/dayjs";

const todayFunction = "TODAY()";

test.describe("TC-EXEL As a Superuser - I want to test spreadsheets", function () {
  test(`TC-EXEL01 - excel "${todayFunction}" function execution`, async ({
    basePage,
    indexPage,
  }) => {
    const { $el } = indexPage;

    await test.step("Open spreadsheets and verify it it's visible", async () => {
      await basePage.gotoURL(paths.excelSpreadsheet);
      await expect($el.docTitle).toHaveValue("Project test BS");
    });

    await test.step(`Use ${todayFunction} in cell and verify result`, async () => {
      await $el.formulaBar.cellNumberInput.fill("E9");
      await $el.formulaBar.cellInput.fill(`=${todayFunction}`);
      await $el.formulaBar.cellInput.click();
      await expect($el.formulaBar.formulaTooltip).toBeVisible();
      await expect($el.formulaBar.formulaTooltip).toHaveText(todayDate);
    });
  });
});
