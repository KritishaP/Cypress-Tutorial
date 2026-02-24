describe('Rahul Shetty Academy Automation',()=>{
    it('Automation Practice',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('input[value="radio3"]').check()//radio3
        cy.get('input[value="radio1"]').check()//radio1
        cy.get('input[value="radio2"]').check()//radio2
        cy.get('#autocomplete').type('Nep')//suggestion
        cy.wait(500)
        cy.get('.ui-menu-item div').contains('Nepal').click()
        cy.get('#dropdown-class-example').select('option2')  //selects by value
        cy.get('#checkBoxOption2').check() //check only selected checkbox
        cy.get('#checkBoxOption2').uncheck() //uncheck option2
        cy.get('input[type="checkbox"]').check(['option1','option3']) //select 2 checkbox
        // cy.get('#openwindow').click()
        // cy.get('#opentab').click()
        cy.get('#name').type('kritisha')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        cy.get('#displayed-text').type('Kritisha')
        cy.get('#hide-textbox').click()
        cy.get('#show-textbox').click()
        cy.get('#show-textbox').click();

        // cy.get('#mousehover').trigger('mouseover') //hover
        // cy.get('.mouse-hover-content a[href="#top"]').should('be.visible').click()
        
    })
})