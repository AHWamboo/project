import type { Page } from "@playwright/test";
import { GridHelper } from "../sections/gridHelper.section";

function getElements(page: Page) {
  const docTitle = page.locator(".docs-title-input");
  const formulaBar = page.locator("#formula-bar-name-box-wrapper");

  return {
    docTitle,
    formulaBar: {
      formulaBar,
      cellNumberInput: formulaBar.locator("#t-name-box"),
      cellInput: formulaBar.locator("#t-formula-bar-input .cell-input"),
      formulaTooltip: page.locator(".waffle-formula-preview-result"),
    },
  };
}

export function IndexPage(page: Page) {
  const $el = getElements(page);

  const sections = {
    gridHelper: GridHelper(page),
  };

  return {
    ...sections,
    $el,
  };
}
