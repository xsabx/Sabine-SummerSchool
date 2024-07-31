class Dashboard {
  elements = {
    dashboardLink: () => cy.getByTestId("nav-dashboard-link"),
    ordersLink: () => cy.get(':nth-child(4) > [data-testid="orders-link"]'),
    firstOrderCard: () => cy.getByTestId("order-card").first(),
    profileLink: () => cy.get(':nth-child(2) > [data-testid="profile-link"]'),
    
    phoneEdit: () => cy.getByTestId("account-phone-editor").find('[data-testid="edit-button"]'), 
    phoneInput: () => cy.getByTestId("phone-input"),
    phoneSavButton: () => cy.getByTestId("save-button").eq(2),
    phoneUpdateMessage: () => cy.getByTestId("account-phone-editor").find('[data-testid="success-message"]'),
  };

  verifyOrderCard() {
    this.elements.firstOrderCard().should("be.visible");
  };
};

export default new Dashboard();
