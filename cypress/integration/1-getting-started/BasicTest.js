/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('ScrollToTop can be clicked at 600px', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:1234')
  })

  it('Scroll is invisible by default', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('scroll-to-top-wc').should('have.length', 1)

  })

  it('Scroll down 600 and click on ScrollToTop', () => {

    cy.scrollTo(0,600)
    cy.wait(2000);

    cy.get('scroll-to-top-wc').click();

   
  })

  it('Confirm we are back at the top of the page', () => {
     //assert we are now back at the top?
     cy.window().its('scrollY').should('equal', 0)
  })
})
