import type { Page } from "@playwright/test";

function getElements(page: Page) {
  const gridTable = page.locator(".grid-table-container", {
    has: page.locator(".grid-scrollable-wrapper"),
  });

  return {
    gridTable,
    getCell: () => {
      return gridTable.locator("");
    },
  };
}

export function GridHelper(page: Page) {
  const $el = getElements(page);

  return {
    $el,
  };
}
