import { test, expect } from '@playwright/test';
import { SelectPage } from '../Pages/selectProduct'

test('test', async ({ page }) => {

    const Select = new SelectPage(page)

  await Select.gotoSelectPage()
  await Select.select()
  await expect(page).toHaveURL('https://automationexercise.com/category_products/6')
});