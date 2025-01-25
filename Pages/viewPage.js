exports.ViewPage = class ViewPage {
    constructor(page) {

        this.page = page

        //Locators for quantity & addToCart
        this.quantity_textbox = page.locator('#quantity')
        this.addtocart_button = page.getByRole('button', { name: ' Add to cart' })
        this.added_header = page.getByRole('header', { name: 'Added!' });
        
        
    }

    async quantity_update(quantity){
        await this.quantity_textbox.fill(quantity)
    }

    async addToCart(){
        await this.addtocart_button.click()
    }



}