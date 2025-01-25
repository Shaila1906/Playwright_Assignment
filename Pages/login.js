exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_textbox = page.getByRole('textbox', { name: 'Name' })
        this.email_textbox = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.signup_button = page.getByRole('button', { name: 'Signup' })
    }

    async gotoLoginPage(){
        await this.page.goto('https://automationexercise.com/login');
    }

    async login(username, email){
        await this.username_textbox.fill(username)
        await this.email_textbox.fill(email)
        await this.signup_button.click()
    }

}