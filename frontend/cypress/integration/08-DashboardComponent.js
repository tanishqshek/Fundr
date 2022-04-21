describe("shows cards stack", () => {
    it("renders correctly", () => {
      cy.visit('http://localhost:3000/home');
      cy.get('.MuiTypography-root').should('be.visible')
      cy.get('.dashboard_card_h3__rnGl0').should('be.visible')
      cy.get('.dashboard_cardImagediv__dYZ9f').should('be.visible')
      cy.get('.dashboard_para__BNFuN').should('be.visible')
      cy.get('.dashboard_cardImage__GBbVS').should('be.visible')
      cy.get('.dashboard_infoText__1mEAX').should('be.visible')

      cy.get('#dashboard_root__Kya5w').trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: -600, clientY: 0 })
      .trigger('mouseup', {force: true})

      cy.get('#dashboard_root__Kya5w').trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 3000, clientY: 0 })
      .trigger('mouseup', {force: true})

      cy.contains('Logout')
      .should('be.visible')
      .click()
      cy.visit(Cypress.config("baseUrl"));
    });
});