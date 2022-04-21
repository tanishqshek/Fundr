describe('Business Idea', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/businessidea')
      cy.get('.MuiToolbar-root > .MuiTypography-root').should('be.visible')
    })
  
    it('takes business idea as input', () => {
      cy.get('#companyname')
        .should('be.visible')
        .type('Nidera')
  
      // cy.get('.css-6j8wv5-Input').click()
      // cy.get(':nth-child(1)').contains('Automotive').click()
      // cy.get('.css-319lph-ValueContainer').click()
      
      cy.get('.css-6j8wv5-Input').click()
      cy.get(':nth-child(2)').contains('Engineering').click()
      // cy.get('.css-6j8wv5-Input').click()
      // cy.get(':nth-child(2)').contains('Food & Beverage').click()
      // cy.get('.css-6j8wv5-Input').click()
      // cy.get(':nth-child(2)').contains('Oil & Gas').click()
      // cy.get('.css-6j8wv5-Input').click()
      // cy.get(':nth-child(2)').contains('Pharmaceuticals').click()
      // cy.get('.css-6j8wv5-Input').click()
      // cy.get(':nth-child(2)').contains('Real Estate').click()
      // cy.get('.css-6j8wv5-Input').click()
      // cy.get(':nth-child(2)').contains('Services').click()
      // cy.get('.css-6j8wv5-Input').click()
      // cy.get(':nth-child(2)').contains('Telecom').click()
      // cy.get('.css-6j8wv5-Input').click()
      // cy.get(':nth-child(2)').contains('Tobacco').click()

      cy.get('#idea')
        .should('be.visible')
        .type("Nidera provides financial independence to Generation Z. Our goal is to move the smart generation away from cash and toward digital. From ordering your favourite burgers to purchasing gifts for friends, parents, or those special ones (shhhh - we got it for you), the possibilities are limitless")
  
        // cy.get('#companyImageUrl')
        // .should('be.visible')
        // .type("https://www.allaboutfeed.net/app/uploads/2020/12/001_rb-image-1671661.jpeg")

        // cy.get('company_image').selectFile('/fixtures/img1.jpeg')
        cy.get('input[type=file]').selectFile('cypress/fixtures/img1.jpeg')
  
        cy.contains('Submit')
        .should('be.visible')
        .click()
        cy.visit(Cypress.config("baseUrl") + "/founderdash");
  
      })
  })