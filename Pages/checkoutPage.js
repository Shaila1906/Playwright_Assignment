exports.Checkout = class Checkout{

    constructor(page) {

        this.page = page

        //Locators for cart option

        this.cart_link = page.getByRole('link', { name: ' Cart' })
        this.proceedCheckout = page.getByText('Proceed To Checkout')
        this.placeOrder = page.getByRole('link', { name: 'Place Order' })
        this.nameOnCard_textbox = page.locator('input[name="name_on_card"]')
        this.cardNumber_textbox = page.locator('input[name="card_number"]')
        this.ex_textbox = page.getByRole('textbox', { name: 'ex.' })
        this.mm_textbox = page.getByRole('textbox', { name: 'MM' })
        this.yyyy_textbox = page.getByRole('textbox', { name: 'YYYY' })
        this.confirm_button = page.getByRole('button', { name: 'Pay and Confirm Order' })

    }
    //Actions
    async gotocart(){
        await this.cart_link.click()
    }

    async proceedtocheckout(){

        await this.proceedCheckout.click()
  
    }

    async placingorder(){

        await this.placeOrder.click()

    }

    async payment(nameOncard, cardnumber, ex, month, year){

        await this.nameOnCard_textbox.fill(nameOncard);
        await this.cardNumber_textbox.fill(cardnumber);
        await this.ex_textbox.fill(ex);
        await this.mm_textbox.fill(month);
        await this.yyyy_textbox.fill(year);
        await this.confirm_button.click();



    }
        
        
    



}