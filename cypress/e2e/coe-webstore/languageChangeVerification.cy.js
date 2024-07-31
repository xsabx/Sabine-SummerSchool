import Global from "../../pageObjects/Global";

describe('language change verification', () => {
    it('language change URL verification', () => {
        cy.login(Cypress.env("username"), Cypress.env("password"));
        Global.navigateSideMenu.switchLanguage('LV');
        cy.checkUrl('/lv');
    });
});
