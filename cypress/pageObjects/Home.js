import Global from "./Global";

class Home {
  elements = {
    headerLink: () => cy.getByTestId("nav-store-link"),
  };
  actions = {
    navigateToStore: () => {
      cy.visit("/us");
      this.elements.headerLink().click();
      Global.navigateSideMenu.openPage("Store");
      cy.url().should("include", "/store"); // TODO: use your own cy.checkUrl command
    },
  };
};

export default new Home();
