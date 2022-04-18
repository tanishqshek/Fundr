describe("filter tags", () => {
    it("renders correctly", () => {
      cy.visit(Cypress.config("baseUrl") + "/tagfilter");
  
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Banking').click()
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Financial Services').click()
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Cement').click()
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Chemicals').click()
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Conglomerates').click()
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Consumer Durables').click()
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Consumer Non-Durables').click()
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Engineering').click()
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Food & Beverage').click()
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Oil & Gas').click()
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Pharmaceuticals').click()
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Real Estate').click()
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Services').click()
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Telecom').click()
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Tobacco').click()

      cy.contains('Submit')
      .should('be.visible')
      .click()
      cy.visit(Cypress.config("baseUrl") + "/dashboard");

      cy.get('.MuiAvatar-root').click()
      cy.contains('Login')
      .should('be.visible')
      cy.visit(Cypress.config("baseUrl"));

    })
  });