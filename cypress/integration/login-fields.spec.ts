import {LoginPage} from '../page-objects/LoginPage'

const loginPage = new LoginPage();

describe('given - Login fields', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Login').click()
  })

  describe('keep Password and Email fields empty', () => {
    beforeEach(() => {
      cy.get(loginPage.emailField()).clear()
      cy.get(loginPage.passwordField()).clear()
    })
    it('should display alert messages under Email and Password field ', () => {
      cy.get(loginPage.emailAlertMessage()).should('have.text', ' Please provide an email! ')
      cy.get(loginPage.passwordAlertMessage()).should('have.text', ' Please enter your password! ')
    })
  })

  describe('enter invalid Email', () => {
    beforeEach(() => {
      cy.get(loginPage.emailField()).type('invalid')
      cy.get(loginPage.passwordField()).clear()
    })
    it('should display alert messages under Email', () => {
      cy.get(loginPage.emailAlertMessage()).should('have.text', ' Invalid Email! ')
    })
  })

  describe('enter Password with less then 6 length', () => {
    beforeEach(() => {
      cy.get(loginPage.emailField()).clear()
      cy.get(loginPage.passwordField()).type('girl')
    })
    it('should display alert messages under Email and Password field ', () => {
      cy.get(loginPage.passwordAlertMessage()).should('have.text', ' Password must be 6 min length ')
    })
  })
})
