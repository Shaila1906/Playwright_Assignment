exports.LogInPage = class LogInPage{

    constructor(page) {

        this.page = page

        //Locators for login
        this.login_email_textbox = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
        this.password_textbox = page.getByRole('textbox', { name: 'Password' }) 
        this.login_button = page.getByRole('button', { name: 'Login' })

        //Locators for SignUp
        this.username_textbox = page.getByRole('textbox', { name: 'Name' })
        this.email_textbox = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.signup_button = page.getByRole('button', { name: 'Signup' })
        
        
    }

    async gotoLoginPage(){
        await this.page.goto('https://automationexercise.com/login');
    }
    
    //for login
    async login(eMail, password){
        
        await this.login_email_textbox.fill(eMail)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }
    
    //for signup
    async signup(username, email){
        await this.username_textbox.fill(username)
        await this.email_textbox.fill(email)
        await this.signup_button.click()
    }


} 