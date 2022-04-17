describe('Sign Up', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/signup')
      cy.get('.MuiToolbar-root > .MuiTypography-root').should('be.visible')
    
    })
  

    it('successfully registers', () => {
      cy.get('#fname')
        .should('be.visible')
        .type('Alice')
      cy.get('#lname')
        .should('be.visible')
        .type('Garland')
  
      cy.get('#linkedin')
        .should('be.visible')
        .type("alicegarland")
  
      cy.get('#email')
      .should('be.visible')
      .type('alice123@gmail.com')
  
        cy.get('#mobile')
        .should('be.visible')
        .type("2499982749")
  
        cy.get('#pass')
        .should('be.visible')
        .type("alicegar123")
  
        cy.get('#password')
        .should('be.visible')
        .type("alicegar123")
  
        cy.get('#mui-component-select-typeOfUser').click();
        cy.get('.MuiList-root > [tabindex="0"]').contains('Founder').click();
  
        cy.contains('Register')
          .should('be.visible')
          .click()
        cy.visit(Cypress.config("baseUrl") + "/signin");
  
      })
  })