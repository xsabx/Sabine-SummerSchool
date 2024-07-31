// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Home from "../pageObjects/Home";

Cypress.Commands.add("getByTestId", (id) => {
  cy.get(`[data-testid=${id}]`);
});

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/");
  cy.getByTestId("email-input").type(email);
  cy.getByTestId("password-input").type(password);
  cy.getByTestId("sign-in-button").click();
  Home.elements.headerLink().should("contain.text", "Store of Excellence");
});

Cypress.Commands.add("sessionLogin", (email, password) => {
  cy.session([email, password], () => {
    cy.visit("/");
    cy.getByTestId("email-input").type(email);
    cy.getByTestId("password-input").type(password);
    cy.getByTestId("sign-in-button").click();
    Home.elements.headerLink().should("contain.text", "Store of Excellence");
    });
});   

Cypress.Commands.add("checkUrl", (expectedValue) => {
    cy.url().should('include', expectedValue);
});
