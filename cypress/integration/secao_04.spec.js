///<reference types="Cypress" />

describe('Teste de seleçao', () => {
  beforeEach(function() { // Roda antes de qualquer coisa
    cy.visit('./src/index.html')
  })

  it('Seleciona elemento select', () => {
    cy.get('select')
      .select('blog') // Pegando pelo velue do elemento HTML
      .should('have.value', 'blog')

    cy.get('select')
      .select('YouTube') // Pegando pelo texto YouTube
      .should('have.value', 'youtube')

    cy.get('select')
      .select(3) // Pegando pelo indice do seletor 1 - blog 2 - curso 3 - mentoria e 4 - youtube
      .should('have.value', 'mentoria')
  });
});