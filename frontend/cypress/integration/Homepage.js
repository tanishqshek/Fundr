describe("renders the home page and sign up page", () => {
    it("renders correctly", () => {
      cy.visit("/");
      cy.get('.MuiToolbar-root > .MuiTypography-root').should('be.visible')
    });

    it('is redirected to the sign up', () => {
      cy.contains('Sign Up')
        .should('be.visible')
        .click()
      cy.visit(Cypress.config("baseUrl") + "/signup");
    })
});

describe('Sign Up', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup')
    cy.get('.MuiToolbar-root > .MuiTypography-root').should('be.visible')
  })

  it('successfully registers', () => {
    cy.get('#fname')
      .should('be.visible')
      .type('Alice')
    cy.get('#lname')
      .should('be.visible')
      .type('Garland')

    cy.get('#linkedin')
      .should('be.visible')
      .type("alicegarland")

    cy.get('#email')
    .should('be.visible')
    .type('alice123@gmail.com')

      cy.get('#mobile')
      .should('be.visible')
      .type("2499982749")

      cy.get('#pass')
      .should('be.visible')
      .type("alicegar123")

      cy.get('#password')
      .should('be.visible')
      .type("alicegar123")

      cy.get('#mui-component-select-typeOfUser').click();
      cy.get('.MuiList-root > [tabindex="0"]').contains('Founder').click();

      cy.contains('Register')
        .should('be.visible')
        .click()
      cy.visit(Cypress.config("baseUrl") + "/businessidea");

      cy.contains('Logout')
      .should('be.visible')
      .click()
      cy.visit(Cypress.config("baseUrl"));

    })
})

describe('Business Idea', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/businessidea')
    cy.get('.MuiToolbar-root > .MuiTypography-root').should('be.visible')
  })

  it('takes business idea as input', () => {
    cy.get('#companyname')
      .should('be.visible')
      .type('Nidera')

    cy.get('#tags')
      .should('be.visible')
      .type('finance, payment, secure')

    cy.get('#idea')
      .should('be.visible')
      .type("Nidera provides financial independence to Generation Z. Our goal is to move the smart generation away from cash and toward digital. From ordering your favourite burgers to purchasing gifts for friends, parents, or those special ones (shhhh - we got it for you), the possibilities are limitless")

      cy.contains('Logout')
      .should('be.visible')
      .click()
      cy.visit(Cypress.config("baseUrl"));

    })
})

describe("renders the home page and sign in page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get('.MuiToolbar-root > .MuiTypography-root').should('be.visible')
  });

  it('is redirected to the sign in', () => {
    cy.contains('Sign In')
      .should('be.visible')
      .click()
    cy.visit(Cypress.config("baseUrl") + "/signin");
  })
});

describe('Sign In', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signin')
    cy.get('.MuiToolbar-root > .MuiTypography-root').should('be.visible')
  })

  it('successfully logs in', () => {
   
    cy.get('#email')
    .should('be.visible')
    .type('alice123@gmail.com')

      cy.get('#password')
      .should('be.visible')
      .type("alicegar123")

      cy.get('.PrivateSwitchBase-input').check()

      cy.contains('Sign In')
        .should('be.visible')
        .click()
      cy.visit(Cypress.config("baseUrl") + "/Dashboard");

    })
})

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