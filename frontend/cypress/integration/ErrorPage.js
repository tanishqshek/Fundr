describe("renders the error page", () => {
    it("renders correctly", () => {
      cy.visit(Cypress.config("baseUrl") + "/errorpage");
  
cy.contains('ERROR 404! PAGE NOT FOUND!')
.should('be.visible')

cy.contains('Return to Home Page').click()
cy.visit(Cypress.config("baseUrl"));
})
});