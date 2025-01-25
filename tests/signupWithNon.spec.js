import { test, expect } from '@playwright/test';
import { SignupPage0 } from '../Pages/signup0'
import { SignupPage } from '../Pages/signup'

test('Complete the sign-up process with Nonrequired fields', async ({ page }) => {

  const Login = new SignupPage0(page)
  const signup = new SignupPage(page)

  await Login.gotoLoginPage()
  await Login.login('shailaaa', 'shaila19999999999@gmail.com')

  await signup.signupWithNonrequired('Mr', '25', 'July', '1999', 'xyz', 'Sylhet')
  
  
});