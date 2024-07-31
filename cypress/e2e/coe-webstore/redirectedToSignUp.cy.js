import Login from "../../pageObjects/Login";

describe('redirected to signup', () => {
    it('Redirects to sign-up if unauthenticated', () => {
        cy.visit('/');
        Login.elements.joinUsButton().click();
        cy.checkUrl('/sign-up');
    });
});

