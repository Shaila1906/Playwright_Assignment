

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
        //await this.fileUpload_option.click();
        // await this.fileUpload_option.setInputFiles(data);
        // const filePath = path.join(__dirname, data); // Path to the file to upload
        // await this.setInputFiles('input[type="file"]', filePath);
        //await this.submit_button.click();

        
    }

    async uploadFile(filePath) {
        // Upload a file
        await this.fileUpload_option.setInputFiles(filePath);
    }

    async submitForm() {
        // Click the submit button
        await this.submit_button.click();
    }

    // async verifySubmissionSuccess() {
    //     // Verify the success message appears
    //     await this.successMessage.waitFor();
    //     return this.successMessage.textContent();
    // }




}