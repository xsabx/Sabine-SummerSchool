import Login from "../../pageObjects/Login";
import SignUp from "../../pageObjects/SignUp";

// https://tdlschool.atlassian.net/browse/TSS22N-40

describe('Sign up mandatory field functionality', () => {
    it('Sign in with empty mandatory field', () => {
        cy.visit('/');
        Login.elements.joinUsButton().click();
        cy.checkUrl('/sign-up');

        SignUp.elements.firstNameInput().should("be.visible").clear();
        SignUp.elements.lastNameInput().should("be.visible").type('Doe');
        SignUp.elements.emailInput().should("be.visible").type('email@email.com');
        SignUp.elements.passwordInput().should("be.visible").type('Password');
        SignUp.elements.joinButton().click();
        SignUp.elements.firstNameInput().should('have.prop', 'validationMessage', 'Please fill in this field.');
    });
});
