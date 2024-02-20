///<reference types="Cypress" />

describe('Marcando e desmarcando inputs do tipo checkbox', () => {
    beforeEach(() => {
        cy.visit('./src/index.html');
      });

    it('Seleciona os elementos com checkbox', () => {

        // Marca todos os checks e desmarca apenas o ultimo
        cy.get('input[type="checkbox"]')
          .check()
          .should('be.checked')
          .last()
          .uncheck()
          .should('not.be.checked') // Verifica que esta desmarcado
    
        cy.get('input#phone-checkbox[type="checkbox"]')
          .check()
          .uncheck()
      });
});