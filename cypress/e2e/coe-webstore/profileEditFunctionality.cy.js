import Dashboard from "../../pageObjects/Dashboard";

// https://tdlschool.atlassian.net/browse/TSS22N-200

describe('profile edit functionality', () => {
    it('number edit functionality in profile', () => {
        cy.login(Cypress.env("username"), Cypress.env("password"));
        Dashboard.elements.dashboardLink().click();
        Dashboard.elements.profileLink().click();
        Dashboard.elements.phoneEdit().should('be.visible').click();
        Dashboard.elements.phoneInput().clear().type('22222222');
        Dashboard.elements.phoneSavButton().click();
        Dashboard.elements.phoneUpdateMessage().should('contain.text', 'Phone updated successfully!');
    });
});