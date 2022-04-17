describe("renders the process page", () => {
    it("renders correctly", () => {
      cy.visit(Cypress.config("baseUrl") + "/process");
  
      cy.contains('Raising Funds')
            .should('be.visible')
            .click()
  
      cy.contains('Extend Your Reach')
            .should('be.visible')
            .click()
  
      cy.contains('Build Your Business')
            .should('be.visible')
            .click()

    })
  });