class StorePage {
  elements = {
    productWrapper: () =>
      cy.getByTestId("product-wrapper").find(".absolute").eq(1),
  };
};

export default new StorePage();
