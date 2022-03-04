describe("renders the home page", () => {
    it("renders correctly", () => {
      cy.visit("/");
    });

    it('is redirected to the sign up', () => {
      cy.contains('Sign Up')
        .should('be.visible')
        .click()
      cy.visit(Cypress.config("baseUrl") + "/signup");
    })
    it('is redirected to the founder page', () => {
      cy.contains('Register')
        .should('be.visible')
        .click()
      cy.visit(Cypress.config("baseUrl") + "/businessidea");
    })
});