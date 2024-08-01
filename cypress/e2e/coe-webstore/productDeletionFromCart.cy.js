import Global from "../../pageObjects/Global";
import Home from "../../pageObjects/Home";
import StorePage from "../../pageObjects/StorePage";
import ProductPage from "../../pageObjects/ProductPage";
import Cart from "../../pageObjects/Cart";

describe('redirected to signup', () => {
    it('Redirects to sign-up if unauthenticated', () => {
        cy.login(Cypress.env("username"), Cypress.env("password")); // logs in
        Home.actions.navigateToStore(); //function that navigates to the store page (also checks it)
        StorePage.elements.productWrapper().click();
        ProductPage.elements.productOptions().click();
        ProductPage.elements.addProductButton().click();
        cy.wait(1000); //waits for product to show in the cart
        Cart.elements.deleteButton().click(); 
        Global.navigateSideMenu.openPage("Cart");
        cy.contains("You don't have anything in your cart. Let's change that, use the link below to start browsing our products.")
  .should('be.visible');
    });
});
