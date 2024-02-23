///<reference types="Cypress" />

describe('Marcando e desmarcando inputs checkbox', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    });

    it('marca ambos checkboxes, depois desmarca o último', () => {

        // Marca todos os checks e desmarca apenas o ultimo
        cy.get('input[type="checkbox"]')
          .check()
          .should('be.checked')
          .last()
          .uncheck()
          .should('not.be.checked') // Verifica que esta desmarcado
      });
});