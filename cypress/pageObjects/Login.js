class Login {
  elements = {
    emailInput: () => cy.getByTestId("email-input"),
    passwordInput: () => cy.getByTestId("password-input"),
    signInButton: () => cy.getByTestId("sign-in-button"),
    joinUsButton: () =>  cy.getByTestId("register-button"),
  };

  actions = {
    enterEmail: (email) => {
      this.elements.emailInput().type(email);
    },
    enterPassword: (password) => {
      this.elements.passwordInput().type(password);
    },
    clickSignIn: () => {
      this.elements.signInButton().click();
    },
  };
};

export default new Login();
