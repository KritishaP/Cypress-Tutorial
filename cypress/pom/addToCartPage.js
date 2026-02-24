class AddToCart{
    addToCart = '[data-test="add-to-cart-sauce-labs-backpack"]'
    cartBadge = '[data-test="shopping-cart-badge"]'
    cartPage = '[data-test="shopping-cart-link"]'

    getItemOnCart(){ return cy.get(this.addToCart); }
    getCartCount(){ return cy.get(this.cartBadge); }
    goToCartPage(){return cy.get(this.cartPage); }

}
export default new AddToCart();