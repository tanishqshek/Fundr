describe("renders the founder dash page", () => {
    it("renders correctly", () => {
      cy.visit(Cypress.config("baseUrl") + "/founderdash");
  
cy.contains('You have successfully submitted your data!')
.should('be.visible')

cy.get('.MuiAvatar-root').click()
cy.contains('Login')
.should('be.visible')
cy.visit(Cypress.config("baseUrl"));
})
});