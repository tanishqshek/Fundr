describe("renders the account settings page", () => {
    it("renders correctly", () => {
      cy.visit(Cypress.config("baseUrl") + "/settings");
  
      cy.contains('Basic Information')
            .should('be.visible')
  
        cy.contains('Name')
            .should('be.visible')

        cy.contains('E-mail ID:')
            .should('be.visible')

        cy.contains('Contact Number:')
            .should('be.visible')

        cy.contains('User Type:')
            .should('be.visible')

        cy.get('.MuiAvatar-root').click()
        cy.contains('Login')
            .should('be.visible')
        cy.visit(Cypress.config("baseUrl"));
    })
  });