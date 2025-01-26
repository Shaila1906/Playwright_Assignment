import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/homePage';
import { ViewPage } from '../Pages/viewPage';
import { LogInPage } from '../Pages/loginPage';
import { Checkout } from '../Pages/checkoutPage';

test('Checkout', async ({ page }) => {

    const SelectProduct = new HomePage(page);
    const ViewProduct = new ViewPage(page);
    const LogIn = new LogInPage(page);
    const CheckOut = new Checkout(page);

    await LogIn.gotoLoginPage();
    await LogIn.login('shaila1999@gmail.com', 'shaila1234')

    
    await SelectProduct.selectView();

    await ViewProduct.quantity_update('2');
    await ViewProduct.addToCart();

    await CheckOut.gotocart();
    await CheckOut.proceedtocheckout();
    await CheckOut.placingorder();
    await CheckOut.payment('Shaila Akter', '123456789', '312', '07', '2029');

    await expect(page.locator('#form')).toContainText('Order Placed!'); //verifying if the order is placed or not

    await page.close();

    



  

});