describe('Test automation example',()=>{
    it('Visit tshirt page',()=>{
        cy.visit('https://automationexercise.com/')
        cy.get('[href="#Men"]').click()
        cy.contains('a','Tshirts').click()
    })
})