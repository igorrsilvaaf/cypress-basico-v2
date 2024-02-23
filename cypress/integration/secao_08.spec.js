///<reference types="Cypress" />

describe('Valaidando aplicação em uma nova aba', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    });  

    // Exercicio 01
    it('Abre link em nova aba', () => {
        cy.get('#privacy a')
            .should('have.attr', 'target', '_blank')
            .invoke('removeAttr', 'target')
            .click()
        
        cy.contains('Talking About Testing')
            .should('be.visible')
    });
});