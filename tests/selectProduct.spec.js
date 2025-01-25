import { test, expect } from '@playwright/test';
import { SelectPage } from '../Pages/selectProduct'

test('Select Product Category', async ({ page }) => {

    const Select = new SelectPage(page)

  await Select.gotoSelectPage() //navigate to the product page
  await Select.select() //selecting Mens>Jean option
  await expect(page).toHaveURL('https://automationexercise.com/category_products/6') //verify if it lands on desired page or not
});