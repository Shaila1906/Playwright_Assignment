import { test, expect } from '@playwright/test'

test('API POST request', async ({ request }) => {


    const response = await request.post("https://automationexercise.com/api/verifyLogin", {

        //1. Use the email and password (used in the UI Testing section).
        form: {
            email: 'shaila1999@gmail.com',
            password: 'shaila1234',
        },
    });

    // 2. Verify the response message is: “User exists!”
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.message).toContain('User exists!');

    


})



test('API GET Request', async ({ request }) => {


    const response = await request.get('https://automationexercise.com/api/brandsList');

    const text = await response.text();
    expect(text).toContain('Polo', 'Babyhug', 'Biba'); //verifing respose contains Polo, Babuhug & Biba
    expect(text).toContain('Heineken', 'BMW', 'Razor'); //verifing it doesn't contain Heineken, BMW & Razor


})