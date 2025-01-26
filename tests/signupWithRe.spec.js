import { test, expect } from '@playwright/test';
import { SignupPage0 } from '../Pages/signup0'
import { SignupPage } from '../Pages/signup'


test('Complete the sign-up process with Required fields', async ({ page }) => {

  const Login = new SignupPage0(page)
  const signup = new SignupPage(page)

  await Login.gotoLoginPage()
  await Login.login('shailaaa', 'shaila1999999999@gmail.com')

  await signup.signupWithRequired('shaila1234', 'Shaila', 'Akter', 'Narsingdi', 'India', '1st state', 'Cityy', '1234', "123456789")
  await expect(page).toHaveTitle(/Account Created/i);//verify the submission
  await page.close();

});

