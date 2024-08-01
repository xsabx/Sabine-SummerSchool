import Global from "../../pageObjects/Global";
//https://tdlschool.atlassian.net/browse/TSS22N-315

describe('footer social icon link functionality', () => {
    it('footer social icon link verification', () => {
        cy.login(Cypress.env("username"), Cypress.env("password")); // logs in
        Global.navigateSideMenu.openPage("Home"); // navigates to home from side menu

        // Array of social icon selectors and expected URLs
        const socialIcons = [
            { selector: '.align-center > .flex > :nth-child(1) > a', expectedUrl: 'https://www.testdevlab.com/'},
            { selector: '.align-center > .flex > :nth-child(2) > a', expectedUrl: 'https://www.linkedin.com/company/testdevlab/' },
            { selector: '.align-center > .flex > :nth-child(3) > a', expectedUrl: 'https://www.facebook.com/TestDevLab/' },
            { selector: '.align-center > .flex > :nth-child(4) > a', expectedUrl: 'https://twitter.com/testdevlab' },
        ];

        //function that checks expected URL for each icon
        socialIcons.forEach(icon => {
            cy.get(icon.selector).should('have.attr', 'href', icon.expectedUrl);
        });
    });
});
