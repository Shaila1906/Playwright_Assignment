import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login'
import { SignupPage } from '../Pages/signup'

test('test', async ({ page }) => {

  const Login = new LoginPage(page)
  const signup = new SignupPage(page)

  await Login.gotoLoginPage()
  await Login.login('shailaaa', 'shaila19999999999@gmail.com')

  await signup.signupWithNonrequired('Mr', '25', 'July', '1999', 'xyz', 'Sylhet')
  
  
});