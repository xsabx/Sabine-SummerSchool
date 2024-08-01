import Global from "../../pageObjects/Global";

// https://tdlschool.atlassian.net/browse/TSS22N-240

describe('language change verification', () => {
    it('language change URL verification', () => {
        cy.login(Cypress.env("username"), Cypress.env("password"));
        Global.navigateSideMenu.switchLanguage('LV');
        cy.checkUrl('/lv');
    });
});
