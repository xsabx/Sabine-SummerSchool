class Dashboard {
  elements = {
    dashboardLink: () => cy.getByTestId("nav-dashboard-link"),
    ordersLink: () => cy.get(':nth-child(4) > [data-testid="orders-link"]'),
    firstOrderCard: () => cy.getByTestId("order-card").first(),
  };

  verifyOrderCard() {
    this.elements.firstOrderCard().should("be.visible");
  };
};

export default new Dashboard();
