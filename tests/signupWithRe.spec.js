import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login'
import { SignupPage } from '../Pages/signup'


test('test', async ({ page }) => {

  const Login = new LoginPage(page)
  const signup = new SignupPage(page)

  await Login.gotoLoginPage()
  await Login.login('shailaaa', 'shaila1999999999@gmail.com')

  await signup.signupWithRequired('shaila1234', 'Shaila', 'Akter', 'Narsingdi', 'India', '1st state', 'Cityy', '1234', "123456789")
  await expect(page).toHaveTitle(/Account Created/i);
  
});

