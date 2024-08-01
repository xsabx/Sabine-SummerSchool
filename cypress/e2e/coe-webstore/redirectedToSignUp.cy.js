import Login from "../../pageObjects/Login";
// https://tdlschool.atlassian.net/browse/TSS22N-16

describe('redirected to signup', () => {
    it('Redirects to sign-up if unauthenticated', () => {
        cy.visit('/');
        Login.elements.joinUsButton().click();
        cy.checkUrl('/sign-up'); //command for correct URL checking is used
    });
});

