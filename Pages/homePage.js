exports.HomePage = class HomePage {

    constructor(page) {

        this.page = page

        //Locators for a product view option
        this.view_product = page.locator('div:nth-child(4) > .product-image-wrapper > .choose > .nav > li > a')
        
        
        
        //div.col-sm-4:nth-child(4) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)
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