class ProductPage {
  elements = {
    productOptions: () => cy.getByTestId("option-button").contains("S"),
    addProductButton: () => cy.getByTestId("add-product-button"),
  };
};

export default new ProductPage();
