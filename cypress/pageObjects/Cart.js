class Cart {
  elements = {
    checkoutButton: () => cy.getByTestId("checkout-button"),
    deleteButton: () => cy.get('[data-testid="product-row"] button'), 
  };
};

export default new Cart();
