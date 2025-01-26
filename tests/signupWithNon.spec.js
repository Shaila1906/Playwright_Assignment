import { test, expect } from '@playwright/test';
import { LogInPage } from '../Pages/loginPage';
import { SignupPage } from '../Pages/signup'

test('Complete the sign-up process with Nonrequired fields', async ({ page }) => {

  const signup = new LogInPage(page)
  const signupf = new SignupPage(page)

  await signup.gotoLoginPage()
  await signup.signup('shailaaa', 'shaila1999999999999999@gmail.com')

  await signupf.signupWithNonrequired('Mr', '25', 'July', '1999', 'xyz', 'Sylhet')
  await page.close();
  
});