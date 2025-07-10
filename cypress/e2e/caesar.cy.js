/// <reference types="cypress" />

context('Caesar', () => {
    beforeEach(() => {
        cy.visit('../../pages/caesar.html')
    })

    it('should have a result of Khoor! for Hello! with the key: 3', () => {
        cy.dataCy('cipher-key').type('3')
        cy.dataCy('cipher-message').type('Hello!')
        cy.dataCy('cipher-btn').click()
        cy.dataCy('result').should('have.text', 'Khoor!')
    })
})