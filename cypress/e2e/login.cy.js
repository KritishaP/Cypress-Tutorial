describe('login test suite',()=>{
    it('Login Test',()=>{
        cy.visit('https://automationexercise.com/login')
        cy.get('[data-qa="login-email"]').type('example@gmail.com')
        cy.get('[data-qa="login-password"]').type('12345')
        cy.get('[data-qa="login-button"]').click()
    })
})