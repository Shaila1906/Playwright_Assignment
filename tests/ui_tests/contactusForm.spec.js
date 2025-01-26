import { test, expect } from '@playwright/test';
import { ContactusPage } from '../../Pages/contactusPage';
const path = require('path');

test('Filling the Contact Us Form', async ({ page }) => {

    const contact = new ContactusPage(page)

    await contact.gotoContactusPage();
    await contact.formFill('Shaila', 'shaila1999@gmail.com', 'About my order', 'Where is my order', 'C:/Users/shail/OneDrive/Desktop/Assignment1/testData.txt');
    const filePath = path.join(__dirname, '../testData.txt'); // Adjust file location if needed
    await contact.uploadFile(filePath);
    page.on('dialog', dialog => dialog.accept());

    await contact.submitForm();

    //verify the submission
    await expect(page.locator('#contact-page')).toContainText('Success! Your details have been submitted successfully.');
    await page.close();
});

    

    