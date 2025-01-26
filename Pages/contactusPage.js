

exports.ContactusPage = class ContactusPage{
    
    constructor(page){

        this.page = page
        //locators for contact us form
        this.Name_textbox = page.getByRole('textbox', { name: 'Name' });
        this.Email_textbox = page.getByRole('textbox', { name: 'Email', exact: true });
        this.subject_textbox = page.getByRole('textbox', { name: 'Subject' });
        this.message_textbox = page.getByRole('textbox', { name: 'Your Message Here' });
        this.fileUpload_option = page.locator('input[name="upload_file"]');
        this.submit_button = page.getByRole('button', { name: 'Submit' });

    }

    //actions

    //navigate to contactus page
    async gotoContactusPage(){
        await this.page.goto('https://automationexercise.com/contact_us');
    }

    //Form submission
    async formFill(Name, email, subject, message) {
        await this.Name_textbox.fill(Name);
        await this.Email_textbox.fill(email);
        await this.subject_textbox.fill(subject);
        await this.message_textbox.fill(message);
        

        
    }

    async uploadFile(filePath) {
        // Upload a file
        await this.fileUpload_option.setInputFiles(filePath);
    }

    async submitForm() {
        // Click the submit button
        await this.submit_button.click();
        
    }

    




}