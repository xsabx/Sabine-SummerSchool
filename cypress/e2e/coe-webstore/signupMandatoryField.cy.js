import Login from "../../pageObjects/Login";
import SignUp from "../../pageObjects/SignUp";
// https://tdlschool.atlassian.net/browse/TSS22N-40

describe('Sign up mandatory field functionality', () => {
    it('Sign in with empty mandatory field', () => {
        const signupInfo = {
            firstName: "",
            lastName: "One",
            email: "email@email.com",
            password: "Password",
          };

        cy.visit('/'); 
        Login.elements.joinUsButton().click(); 
        cy.checkUrl('/sign-up');
        SignUp.fillForm(signupInfo);  //Uses function to fill in form with given const 
        SignUp.elements.joinButton().click();
        SignUp.elements.firstNameInput().should('have.prop', 'validationMessage'); // Checks if the validation message appears
    });
});
