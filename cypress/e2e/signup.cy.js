describe('Sign up test suite',()=>{
    it('sign up with valid credentials',()=>{
        cy.visit('https://automationexercise.com/login')
        cy.get('[data-qa="signup-name"]').type('kritisha')
        cy.get('[data-qa="signup-email"]').type('example98765@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
    })
})