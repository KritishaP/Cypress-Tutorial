class CheckoutPage{
    firstName = '[data-test="firstName"]'
    lastName = '[data-test="lastName"]'
    postalCode = '[data-test="postalCode"]'
    continue = '[data-test="continue"]'
    

    getFirstName(){ return cy.get(this.firstName) ;}
    getLastName(){ return cy.get(this.lastName);}
    getPostalCode(){ return cy.get(this.postalCode);}
    clickContinue(){return cy.get(this.continue);}
    
}
export default new CheckoutPage;