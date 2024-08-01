import Global from "../../pageObjects/Global";
import Home from "../../pageObjects/Home";
import StorePage from "../../pageObjects/StorePage";
import ProductPage from "../../pageObjects/ProductPage";
import Cart from "../../pageObjects/Cart";
import Checkout from "../../pageObjects/Checkout.js";
import Dashboard from "../../pageObjects/Dashboard.js";

describe("Complete Workflow", () => {
  beforeEach(() => {
    cy.sessionLogin(Cypress.env("username"), Cypress.env("password"));
  });

  it("Logs in functionality", () => { //no need to log in because its already done before each test, this checks if its working
    cy.visit("/");
    Home.elements.headerLink().should("contain.text", "Store of Excellence");
  });

  it("Add to cart functionality", () => {
    cy.visit("/us");
    Home.actions.navigateToStore(); //function that navigates to the store page (also checks it)
    StorePage.elements.productWrapper().click();
    ProductPage.elements.productOptions().click();
    ProductPage.elements.addProductButton().click();
    cy.wait(1000); //waits for product to show in the cart
  });

  it("Proceed to Checkout", () => {
    cy.visit("/store");
    Global.navigateSideMenu.openPage("Cart"); //takes to cart from store page (using side menu)
    Cart.elements.checkoutButton().click();
  });

  it("Checkout functionality", () => {
    const shippingInfo = {
      firstName: "User",
      lastName: "One",
      address: "123 Main St",
      postalCode: "12345",
      city: "Toronto",
      country: "Canada",
    };

    cy.visit("/checkout?step=address");
    Checkout.fillForm(shippingInfo); //Uses function to fill in form with given const 
    Checkout.elements.addAddressButton().click();
    Checkout.elements.deliveryOption().click();
    Checkout.elements.addDeliveryButton().click();
    Checkout.submitPayment(); //function for payment submition is used
    Checkout.elements.orderButton().click();
  });

  it("View order history", () => {
    cy.visit("/");
    Dashboard.elements.dashboardLink().click();
    Dashboard.elements.ordersLink().click();
    Dashboard.verifyOrderCard(); //function for verifying if order card is shown
  });

  it("Log out functionality (side menu)", () => {
    cy.visit("/");
    Global.logout(); //logout function from global class
    cy.checkUrl('/us/sign-in'); //command for correct URL checking is used
  });
});
