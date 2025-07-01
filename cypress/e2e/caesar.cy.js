/// <reference types="cypress" />

context('Caesar', () => {
    beforeEach(() => {
        cy.visit('../../pages/caesar.html')
    })

    it('should have a result of Khoor! for Hello! with the key: 3', () => {
        cy.get('input[type=number]').type('3')
        cy.get('textarea').type('Hello!')
        cy.get('button[type=button]').click()

        cy.get('p#result').should('have.text', 'Khoor!')
    })
})