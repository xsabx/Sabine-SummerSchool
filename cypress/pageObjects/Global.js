class Global {
  elements = {
    sideMenu: () => cy.getByTestId("nav-menu-button"),
    sideMenuPopup: () => cy.getByTestId("nav-menu-popup"),
    sideMenuLinks: (pageName) =>
      cy.getByTestId("nav-menu-popup").contains("a", pageName),
    logoutButton: () => cy.contains("Log out"),
  };

  navigateSideMenu = {
    openPage: (pageName) => {
      this.elements.sideMenu().click();
      this.elements.sideMenuPopup().should("be.visible");
      this.elements.sideMenuLinks(pageName).click();
    },
  };

  logout = () => {
    this.elements.sideMenu().click();
    this.elements.sideMenuPopup().should("be.visible");
    this.elements.logoutButton().click();
  };
};

export default new Global();
