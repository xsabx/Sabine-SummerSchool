class Cart {
  elements = {
    checkoutButton: () => cy.getByTestId("checkout-button"),
    deleteButton: () => cy.get('.text-small-regular .flex.cursor-pointer'), 
  };
};

export default new Cart();
