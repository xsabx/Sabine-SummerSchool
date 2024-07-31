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

  it("Logs in functionality", () => {
    cy.visit("/");
    Home.elements.headerLink().should("contain.text", "Store of Excellence");
  });

  it("Add to cart functionality", () => {
    cy.visit("/us");
    Home.actions.navigateToStore();
    StorePage.elements.productWrapper().click();
    ProductPage.elements.productOptions().click();
    ProductPage.elements.addProductButton().click();
  });

  it("Proceed to Checkout", () => {
    cy.visit("/store");
    Global.navigateSideMenu.openPage("Cart");
    Cart.elements.checkoutButton().click();
  });

  it("Enters shipping address information", () => {
    const shippingInfo = {
      firstName: "User",
      lastName: "One",
      address: "123 Main St",
      postalCode: "12345",
      city: "Toronto",
      country: "Canada",
    };

    cy.visit("/checkout?step=address");
    Checkout.fillForm(shippingInfo);
    Checkout.elements.addAddressButton().click();
  });

  it("Enters delivery information", () => {
    cy.visit("/checkout?step=delivery");
    Checkout.elements.deliveryOption().click();
    Checkout.elements.addDeliveryButton().click();
  });

  it("Makes payment and places order", () => {
    cy.visit("/checkout?step=payment");
    Checkout.submitPayment();
    Checkout.elements.orderButton().click();
    Global.navigateSideMenu.openPage("Home");
  });

  it("View order history", () => {
    cy.visit("/");
    Dashboard.elements.dashboardLink().click();
    Dashboard.elements.ordersLink().click();
    Dashboard.verifyOrderCard();
  });

  it("Log out functionality (side menu)", () => {
    cy.visit("/");
    Global.logout();
    cy.url().should("include", "/us/sign-in");
  });
});
