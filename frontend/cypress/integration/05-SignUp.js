
describe('Sign Up', () => {
    
    beforeEach(() => {
      cy.visit('http://localhost:3000/signup')
      cy.get('.MuiToolbar-root > .MuiTypography-root').should('be.visible')
    
    })
  

    it('successfully registers', () => {
      cy.get('#fname')
        .should('be.visible')
        .type('Joey')
      cy.get('#lname')
        .should('be.visible')
        .type('Tribbiani')
  
      cy.get('#linkedin')
        .should('be.visible')
        .type("joeytribbani")
  
      cy.get('#email')
      .should('be.visible')
      .type('joey123@gmail.com')
  
        cy.get('#mobile')
        .should('be.visible')
        .type("3528765645")
  
        cy.get('#pass')
        .should('be.visible')
        .type("joe123")
  
        cy.get('#password')
        .should('be.visible')
        .type("joe123")
  
        cy.get('#mui-component-select-typeOfUser').click();
        cy.get('.MuiList-root > [tabindex="-1"]').click();
        // cy.get('.MuiList-root').select('Investor')
  
        cy.contains('Register')
          .should('be.visible')
          .click()
        cy.visit(Cypress.config("baseUrl") + "/signin");
  
      })
  })

