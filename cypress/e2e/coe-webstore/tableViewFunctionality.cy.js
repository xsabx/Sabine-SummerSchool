import Global from "../../pageObjects/Global";
// https://tdlschool.atlassian.net/browse/TSS22N-215

describe('table view functioanlity', () => {
    it('store table view function verification', () => {
        cy.login(Cypress.env("username"), Cypress.env("password")); //logs in
        Global.navigateSideMenu.openPage("Store"); //navigates to store from side menu
        cy.getByTestId('table-view-btn').click();
        cy.checkUrl('/table'); //command for correct URL checking is used
    });
});
