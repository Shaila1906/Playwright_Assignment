exports.LogInPage = class LogInPage{

    constructor(page) {

        this.page = page

        //Locators for login
        this.login_email_textbox = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
        this.password_textbox = page.getByRole('textbox', { name: 'Password' }) 
        this.login_button = page.getByRole('button', { name: 'Login' })
        
        
    }

    async gotoLoginPage(){
        await this.page.goto('https://automationexercise.com/login');
    }

    async login(eMail, password){
        
        await this.login_email_textbox.fill(eMail)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }


} 