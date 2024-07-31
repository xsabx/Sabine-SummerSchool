# SabineSummerSchool 2024 - cypress, javascript

This project is a test automation suite developed using Cypress and JavaScript for TDLSummerSchool 2024. It includes end-to-end tests for various functionalities and some additional testcases.

## Complete Workflow

The `Complete Workflow` test suite includes the following tests:

1. **Logs in functionality**: Tests the user login process.
2. **Add to cart functionality**: Tests adding a product to the cart.
3. **Proceed to Checkout**: Tests the checkout process from the store page.
4. **Enters shipping address information**: Tests filling out the shipping address form.
5. **Enters delivery information**: Tests selecting and submitting the delivery option.
6. **Makes payment to place order**: Tests the payment process and placing the order.
7. **View order history**: Tests navigating to and viewing the order history.
8. **Log out functionality**: Tests the user logout process.

## Page Object Model (POM)

The project follows the Page Object Model (POM) design pattern to organize the code better and make it more maintainable.

### Global.js

- Handles global elements and actions used across different tests.

### Login.js

- **Elements**: Email input, password input, sign-in button.
- **Actions**: Enter email, enter password, click sign-in.

### Home.js

- **Elements**: Header link.
- **Actions**: Navigate to the store.

### StorePage.js

- **Elements**: Product wrapper.

### ProductPage.js

- **Elements**: Product options, add product button.

### Checkout.js

- **Elements**:
  - First name input, last name input, address input, postal code input, city input, country select.
  - Add address button, delivery option, submit delivery option button, submit payment button, submit order button.
- **Actions**:
  - Fill the shipping form

### DashboardPage.js

- **Elements**: Dashboard link, orders link.

## npm scripts

### Code formatting

This project uses prettier package to format the code. Run the command: **npm run format**

### Running the Tests in cypress

Cypress is opened with the command: **npm run cypressopen**
