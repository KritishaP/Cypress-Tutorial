describe('Sign up test suite',()=>{
    it('sign up with valid credentials',()=>{
        cy.visit('https://automationexercise.com/login')
        cy.get('[data-qa="signup-name"]').type('kritisha')
        cy.get('[data-qa="signup-email"]').type('example98765@gmail.com')
        cy.get('[data-qa="signup-button"]').click()

        cy.get('#id_gender2').check()
        cy.get('[data-qa="password"]').type('12345')
        cy.get('[data-qa="first_name"]').type('kritisha')
        cy.get('[data-qa="last_name"]').type('puri')
        cy.get('[data-qa="address"]').type('Narendra modi')
        cy.get('[data-qa="country"]').select('India')
        cy.get('[data-qa="state"]').type('Gujrat')
        cy.get('[data-qa="city"]').type('Rajkot')
        cy.get('[data-qa="zipcode"]').type('00123')
        cy.get('[data-qa="mobile_number"]').type('9876534278')
        cy.get('[data-qa="create-account"]').click()

    })
})