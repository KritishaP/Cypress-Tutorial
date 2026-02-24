import addToCartPage from "../pom/addToCartPage";
import cartPage from "../pom/cartPage";
import checkoutPage from "../pom/checkoutPage";
import paymentDetailPage from "../pom/paymentDetailPage";

describe('Sauce demo checkout flow',()=>{
    it('Checkout successfully',()=>{
        //cy.visit('https://www.saucedemo.com/');
        //Assertion: login page loads successfully
        cy.visit('/');

        // cy.contains('Swag Labs').should('be.visible');
        cy.get('.login_logo').should('contain','Swag Labs')

        //login script
        cy.login('standard_user','secret_sauce');

        //Assertion: login successfully
        cy.get('.title').should('have.text','Products');

        //Add to cart button
        //cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        addToCartPage.getItemOnCart().click();

        //Assertion :cart badge updated
        //cy.get('[data-test="shopping-cart-badge"]').should('have.text','1');
        addToCartPage.getCartCount().should('have.text','1');

        //go to cart
        //cy.get('[data-test="shopping-cart-link"]').click();
        addToCartPage.goToCartPage().click();

        //items visible in cart
        //cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Backpack');
        cartPage.isCartItemVisible().should('contain','Sauce Labs Backpack');

        //click checkout
        //cy.get('[data-test="checkout"]').click();
        cartPage.clickcheckout().click();

        cy.fixture('patientInformation').then((userData) =>{
            //fill form using fixture data
            //cy.get('[data-test="firstName"]').type(userData.firstName);
            //cy.get('[data-test="lastName"]').type(userData.lastName);
            //cy.get('[data-test="postalCode"]').type(userData.postalCode);
            //cy.get('[data-test="continue"]').click()

            checkoutPage.getFirstName().type(userData.firstName);
            checkoutPage.getLastName().type(userData.lastName);
            checkoutPage.getPostalCode().type(userData.postalCode);
            checkoutPage.clickContinue().click();
        })
        //Assertion:overview page loaded
        //cy.get('[data-test="title"]').should('contain','Checkout: Overview')
        paymentDetailPage.checkTitle().should('contain','Checkout: Overview')

        //finish checkout
        //cy.get('[data-test="finish"]').click()
        paymentDetailPage.clickFinish().click()

        //final assertion
        cy.get('[data-test="complete-header"]').should('contain','Thank you for your order!')
    
    })
})