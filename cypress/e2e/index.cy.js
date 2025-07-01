/// <reference types="cypress" />

context('Homepage', () => {
    beforeEach(() => {
        cy.visit('../../pages/index.html')
    })

    it('should have a paragraph with the content Hello World!', () => {
        cy.get('p').should('have.text', 'Hello World!')
    })
})