import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/homePage'
import { ViewPage } from '../Pages/viewPage';

test('View and Update Product', async ({ page }) => {

    const SelectProduct = new HomePage(page)
    const ViewProduct = new ViewPage(page)

    await SelectProduct.gotoHomePage()  //navigate to the page
    await SelectProduct.selectView()    //product selection

    await ViewProduct.quantity_update('2')  ///quantity update
    await ViewProduct.addToCart()           //adding to cart
    await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible() //verifying if it's added to cart or not




  

});