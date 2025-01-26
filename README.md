# Automated UI Testing Project

## **Project Overview**

This project automates the **UI** & **API** testing for a sample web application using **Playwright**. The tests are implemented using the **Page Object Model (POM)** for maintainability and scalability. Proper assertions are included to validate the UI & API functionality.

---

## **Features**

- Automates critical UI workflows like form submissions, navigation, and element visibility.
- Implements the **Page Object Model (POM)** for organized and modular test logic.
- Includes proper assertions to ensure reliable validation of UI & API behavior.
- Uses https://automationexercise.com/ as sample web application.

---

## **Setup and Installation**

Follow these steps to set up and run the UI tests:

### **Pre-requisites**

- **Node.js**
- **NPM** (Node Package Manager)
- **Playwright**
- **Git**

### **Clone the Repository**

```bash
git clone https://github.com/Shaila1906/Playwright_Assignment
cd /path/to/your/directory


```

## **Install Playwright and Dependencies**

To get started with Playwright, you'll need to install the required Node.js packages.

1. Install the required packages:

```bash
npm install

```

2. Install Playwright browsers (required for Playwright to function properly):

```bash
npm install playwright@latest

```

## **How to Run the Tests**

To execute the both UI & API test suite:

```bash
    npx playwright tests

```

To execute only UI test suite:

```bash
    npx playwright tests --project="UI Tests"

```

To execute only API test suite:

```bash
    npx playwright tests --project="API Tests"

```

### **View Test Results**

1. Test results will appear in the terminal.

2. To generate and view a detailed HTML report:

```bash
npx playwright show-report

```

---

## **Project Structure**

The project follows the Page Object Model (POM) structure for maintainable and scalable test code:

```bash

├── pages/                         # Page Object files
│   ├── checkoutPage.js            # Checkout page locators and methods
│   ├── contactusPage.js           # Contact us page locators and methods
│   ├── homePage.js                # Home page locators and methods
│   ├── loginPage.js               # Login page locators and methods
│   ├── selectProduct.js           # Product selecting page locators and methods
│   ├── signup.js                  # Signup form page locators and methods
│   ├── viewPage.js                # Product Viewing page locators and methods
├── tests/                         # Test folder
│   ├── api_tests/                 # API test files
│   │    ├── getPost.spec.js       # API test file for GET & POST
│   │
│   ├──ui_tests/                   # UI test files
│        ├── addtocart.spec.js     # UI test cases for qus4(adding product to car
│        ├── checkout.spec.js      # UI test cases for qus5(proceed to checout)
│        ├── contactusForm.spec.js # UI test cases foe qus6(filling contactusForm)
│        ├── selectProduct.spec.js # UI test cases for qus3(catagory select)
│        ├── signupWithNon.spec.js # UI test cases for qus2(non-requied fields)
│        ├── signupWithRe.spec.js  # UI test cases for qus2(required fields)
├── playwright.config.js           # Playwright configuration
├── README.md                      # Readme file
├── package.json                   # Project dependencies


```

---

## **Best Practices Followed**

- **Page Object Model (POM):** Maintains a clean separation between test logic and  web element locators.
- **Assertions:** Validates expected vs actual outcomes for all UI interactions.
- **Reusability:** Centralized and reusable methods for interacting with web elements.
- **Reporting:** Provides detailed HTML reports for test results.
- **Handling Sensitive Data:**
   Normally, sensitive data like email and password etc. should be stored securely in a .env file and accessed using environment variables to ensure privacy and security. However, for the purposes of this assignment, these values were hardcoded directly into the scripts to simplify execution. This approach is not recommended for production environments

---

## **Uploading to GitHub**

To upload your code to a public GitHub repository:

1. Ensure your repository is initialized and configured.
2. Push your code to GitHub using these commands:

```bash
 git add .
 git commit -m "Added automated UI tests"
 git push origin main


```

---

## **Contact**

For any questions, issues, or feedback, feel free to reach out.
