import Login from "../../pageObjects/Login";
//https://tdlschool.atlassian.net/browse/TSS22N-19

describe('Log in with unregistered credentials', () => {
    it('Verifying log in with unregistered credentials', () => {
        cy.visit('/'); 
        Login.actions.enterEmail('userone@test.com'); 
        Login.actions.enterPassword('incorrectPassword'); 
        Login.actions.clickSignIn(); 
        cy.getByTestId('login-error-message').should('be.visible').and('contain.text', 'Error: Wrong email or password.');
    });
});