import Global from "../../pageObjects/Global";

// https://tdlschool.atlassian.net/browse/TSS22N-215

describe('table view functioanlity', () => {
    it('store table view function verification', () => {
        cy.login(Cypress.env("username"), Cypress.env("password"));
        Global.navigateSideMenu.openPage("Store");
        cy.get('[data-testid="table-view-btn"]').click();
        cy.checkUrl('/table');
    });
});
