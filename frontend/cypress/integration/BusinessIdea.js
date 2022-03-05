describe('Business Idea', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/businessidea')
      cy.get('.MuiToolbar-root > .MuiTypography-root').should('be.visible')
    })
  
    it('takes business idea as input', () => {
      cy.get('#companyname')
        .should('be.visible')
        .type('Nidera')
  
      cy.get('#tags')
        .should('be.visible')
        .type('finance, payment, secure')
  
      cy.get('#idea')
        .should('be.visible')
        .type("Nidera provides financial independence to Generation Z. Our goal is to move the smart generation away from cash and toward digital. From ordering your favourite burgers to purchasing gifts for friends, parents, or those special ones (shhhh - we got it for you), the possibilities are limitless")
  
        cy.contains('Logout')
        .should('be.visible')
        .click()
        cy.visit(Cypress.config("baseUrl"));
  
      })
  })