class Checkout {
  elements = {
    firstNameInput: () => cy.getByTestId("shipping-first-name-input"),
    lastNameInput: () => cy.getByTestId("shipping-last-name-input"),
    addressInput: () => cy.getByTestId("shipping-address-input"),
    postalCodeInput: () => cy.getByTestId("shipping-postal-code-input"),
    cityInput: () => cy.getByTestId("shipping-city-input"),
    countrySelect: () => cy.getByTestId("shipping-country-select"),

    addAddressButton: () => cy.getByTestId("submit-address-button"),

    deliveryOption: () => cy.contains("FakeEx Standard"),
    addDeliveryButton: () => cy.getByTestId("submit-delivery-option-button"),

    paymentButton: () => cy.getByTestId("submit-payment-button"),
    
    orderButton: () => cy.getByTestId("submit-order-button"),
  };

  fillForm(shippingInfo) {
    this.elements.firstNameInput().type(shippingInfo.firstName);
    this.elements.lastNameInput().type(shippingInfo.lastName);
    this.elements.addressInput().type(shippingInfo.address);
    this.elements.postalCodeInput().type(shippingInfo.postalCode);
    this.elements.cityInput().type(shippingInfo.city);
    this.elements.countrySelect().select(shippingInfo.country);
  };

  submitPayment() {
    this.elements.paymentButton().should("be.visible").click();
    cy.url().should("include", "/checkout?step=review");
  };
};

export default new Checkout();
