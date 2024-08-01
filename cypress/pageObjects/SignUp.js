class SignUp {
    elements = {
      firstNameInput: () => cy.getByTestId("first-name-input"),
      lastNameInput: () => cy.getByTestId("last-name-input"),
      emailInput: () => cy.getByTestId("email-input"),
      passwordInput: () => cy.getByTestId("password-input"),
      joinButton: () => cy.getByTestId("register-button"),

    };
  };
  
export default new SignUp();
  