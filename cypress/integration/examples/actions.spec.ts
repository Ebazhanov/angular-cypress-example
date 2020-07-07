/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Login').click()
  })

  it('.type() - type into a DOM element', () => {
    cy.get('.action-email')
      .type('fake@email.com').should('have.value', 'fake@email.com')
  })
})
