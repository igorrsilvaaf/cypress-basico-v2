///<reference types="Cypress" />

it('Valaidando aplicação de segurança', () => {
    cy.visit('./src/privacy.html')
    
    cy.contains('Talking About Testing')
        .should('be.visible')
});