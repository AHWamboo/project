import { expect, type Page } from "@playwright/test";

function getElements(page: Page) {
  const excelBrandIcon = page.locator(
    "#docs-branding-logo .docs-branding-icon"
  );

  return {
    excelBrandIcon,
  };
}

export function BasePage(page: Page) {
  const baseElements = getElements(page);

  return {
    baseElements,
    page,

    async gotoURL(url: string) {
      await page.goto(url);
      await expect(baseElements.excelBrandIcon).toBeVisible();
    },
  };
}
