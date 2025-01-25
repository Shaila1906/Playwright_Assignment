exports.HomePage = class HomePage {

    constructor(page) {

        this.page = page

        //Locators for a product view option
        this.view_product = page.locator('div:nth-child(4) > .product-image-wrapper > .choose > .nav > li > a')
        
        
    }

    async gotoHomePage(){

        //navigate to the home page
        await this.page.goto('https://automationexercise.com/');
    }

    async selectView(){
        //actions to select the product's view
        await this.view_product.click()
        
    }

}