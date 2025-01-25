exports.SelectPage = class SelectPage {

    constructor(page) {

        this.page = page

        //Locators for Men & Jeans
        this.men_link = page.getByRole('link', { name: ' Men' })
        this.jeans_link = page.getByRole('link', { name: 'Jeans' })
        
    }

    async gotoSelectPage(){
        await this.page.goto('https://automationexercise.com/products');
    }

    async select(){
        
        await this.men_link.click()
        await this.jeans_link.click()
    }

}