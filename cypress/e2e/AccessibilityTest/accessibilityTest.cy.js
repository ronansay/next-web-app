///<reference types="cypress" />

describe('Test Accessibility  for NEXT.JS Application', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.wait(2000)

    });


    //Work Order
    it('Test - Verify Accessibility Issues', () => {

        cy.checkAccessibility();

    })





})