exports.SignupPage = class SignupPage {

    constructor(page) {

        this.page = page

        //Locators For required fields only

        this.password_textbox = page.getByRole('textbox', { name: 'Password *' })
        this.firstName_textbox = page.getByRole('textbox', { name: 'First name *' })
        this.lastName_textbox = page.getByRole('textbox', { name: 'Last name *' })
        this.streetAddress_textbox = page.getByRole('textbox', { name: 'Address * (Street address, P.' })
        this.country_select = page.getByLabel('Country *')
        this.state_textbox = page.getByRole('textbox', { name: 'State *' })
        this.city_textbox = page.getByRole('textbox', { name: 'City * Zipcode *' })
        this.zipcode_textbox = page.locator('#zipcode')
        this.mobileNumber_textbox = page.getByRole('textbox', { name: 'Mobile Number *' })
        


        //locators for Non required fields
        this.mrstitle_checkbox = page.getByRole('radio', { name: 'Mrs.' })
        this.mrtitle_checkbox = page.getByRole('radio', { name: 'Mr.' })
        //birthdate
        this.birthday_option = page.locator('#days')
        this.birthMonth_option = page.locator('#months')
        this.birthYear_option = page.locator('#years')

        this.company_textbox = page.getByRole('textbox', { name: 'Company', exact: true })
        this.address2_textbox = page.getByRole('textbox', { name: 'Address 2' })


        this.createAccount_button = page.getByRole('button', { name: 'Create Account' })


    }

    //actions

    async signupWithRequired(password, firstName, lastName, address1, country, state, city, zipcode, mblnumber){
        await this.password_textbox.fill(password)
        await this.firstName_textbox.fill(firstName)
        await this.lastName_textbox.fill(lastName)
        await this.streetAddress_textbox.fill(address1)
        await this.country_select.selectOption(country)
        await this.state_textbox.fill(state)
        await this.city_textbox.fill(city)
        await this.zipcode_textbox.fill(zipcode)
        await this.mobileNumber_textbox.fill(mblnumber)
        await this.createAccount_button.click()
    }


    async signupWithNonrequired(title, date, month, year, company, address2){
        if(title == "Mr"){

           await this.mrtitle_checkbox.click()
        }
        if(title == "Mrs"){

            await this.mrstitle_checkbox.click()
         }

        await this.birthday_option.selectOption(date)
        await this.birthMonth_option.selectOption(month)
        await this.birthYear_option.selectOption(year)
        await this.company_textbox.fill(company)
        await this.address2_textbox.fill(address2)
        await this.createAccount_button.click()


    }

}