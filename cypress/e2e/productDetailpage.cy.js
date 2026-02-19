describe('My test suite',()=>{
    it('test 1',()=>{
        cy.visit('https://automationexercise.com/')
    })
    it('Click on category',()=>{
        cy.visit('https://automationexercise.com/')
        cy.get('[href="#Women"]').click()
        cy.contains('a', 'Dress').click()
        cy.contains('View Product').eq(0).click()  // first product
        cy.get('#name').type('kritisha')
        cy.get('#email').type('example@gmail.com')
        cy.get('#review').type('Dress is as same as shown in the picture')        
        
    })
    // it('click on specific product',()=>{

    // })
})
