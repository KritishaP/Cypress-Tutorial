describe('Sauce demo checkout flow',()=>{
    it('Checkout successfully',()=>{
        cy.visit('https://www.saucedemo.com/');
        //Assertion: login page loads successfully
        cy.contains('Swag Labs').should('be.visible');
        //login script
        cy.fixture('patientInformation').then((userData) =>{
            cy.login('standard_user','secret_sauce');

            //Assertion: login successfully
            cy.get('.title').should('have.text','Products');

            //Add to cart button
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

            //Assertion :cart badge updated
            cy.get('[data-test="shopping-cart-badge"]').should('have.text','1');

            //go to cart
            cy.get('[data-test="shopping-cart-link"]').click();

            //items visible in cart
            cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Backpack');

            //click checkout
            cy.get('[data-test="checkout"]').click();

            //fill form using fixture data
            cy.get('[data-test="firstName"]').type(userData.firstName);
            cy.get('[data-test="lastName"]').type(userData.lastName);
            cy.get('[data-test="postalCode"]').type(userData.postalCode);
            cy.get('[data-test="continue"]').click()

            //Assertion:overview page loaded
            cy.get('[data-test="title"]').should('contain','Checkout: Overview')

            //finish checkout
            cy.get('[data-test="finish"]').click()

            //final assertion
            cy.get('[data-test="complete-header"]').should('contain','')



        })
    
    })
})