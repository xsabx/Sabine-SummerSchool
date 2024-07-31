import Global from "../../pageObjects/Global";
import Login from "../../pageObjects/Login";
import Home from "../../pageObjects/Home";

describe("login functionallity", () => {
  beforeEach(() => {});

  it("opens webstore page", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome back");
    Login.elements.emailInput("should.be", "visable");
    Login.elements.passwordInput("should.be", "visable");
    Login.elements.signInButton("should.be", "visable");
  });

  it("logs in with valid credentials", () => {
    cy.login(Cypress.env("username"), Cypress.env("password"));

    cy.url().should("include", "/us");
    Home.elements.headerLink().should("contain.text", "Store of Excellence");

    Global.navigateSideMenu.openPage("Store");
    cy.getByTestId("product-wrapper").find(".absolute").eq(1).click();
    cy.getByTestId("product-options").children().first().click();
    cy.getByTestId("add-product-button").should("be.visible").click();
  });
});
