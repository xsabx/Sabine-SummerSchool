class SignUp {
    elements = {
      firstNameInput: () => cy.getByTestId("first-name-input"),
      lastNameInput: () => cy.getByTestId("last-name-input"),
      emailInput: () => cy.getByTestId("email-input"),
      passwordInput: () => cy.getByTestId("password-input"),
      joinButton: () => cy.getByTestId("register-button"),

    };

    //Function for clearer sign up information input
    fillForm(signupInfo) {
      if (signupInfo.firstName) {
        this.elements.firstNameInput().type(signupInfo.firstName);
      };
      this.elements.lastNameInput().type(signupInfo.lastName);
      this.elements.emailInput().type(signupInfo.email);
      this.elements.passwordInput().type(signupInfo.password);
    };
  };
  
export default new SignUp();
  