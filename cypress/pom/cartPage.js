class CartPage {
    cartItems = '[data-test="inventory-item-name"]'
    checkout = '[data-test="checkout"]'

    isCartItemVisible(){return cy.get(this.cartItems); }
    clickcheckout(){return cy.get(this.checkout); }
}
export default new CartPage;