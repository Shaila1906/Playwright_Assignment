import { test, expect } from '@playwright/test';
import { LogInPage } from '../../Pages/loginPage';
import { SignupPage } from '../../Pages/signup'


test('Complete the sign-up process with Required fields', async ({ page }) => {

  const signup = new LogInPage(page)
  const signupf = new SignupPage(page)

  await signup.gotoLoginPage()
  await signup.signup('shailaaa', 'shaila1999999999999@gmail.com')

  await signupf.signupWithRequired('shaila1234', 'Shaila', 'Akter', 'Narsingdi', 'India', '1st state', 'Cityy', '1234', "123456789")
  await expect(page).toHaveTitle(/Account Created/i);//verify the submission
  await page.close();

});

