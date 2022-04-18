describe("renders the privacy settiings page", () => {
    it("renders correctly", () => {
      cy.visit(Cypress.config("baseUrl") + "/privacy");
  
      cy.contains('Change Password')
            .should('be.visible')

        cy.get('#password')
            .should('be.visible')
            .type("alicegar123")
        
        cy.get('#cpassword')
            .should('be.visible')
            .type("alicegar123")

        cy.get('#npassword')
            .should('be.visible')
            .type("alicegar456")

        cy.contains('Save Changes')
            .should('be.visible')
            .click()
            cy.visit(Cypress.config("baseUrl") + "/signin");
    })
  });