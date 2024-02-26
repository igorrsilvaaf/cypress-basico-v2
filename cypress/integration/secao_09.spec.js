///<reference types="Cypress" />

describe('Mobile', () =>{
    beforeEach(function() {
        cy.viewport('iphone-xr')
        cy.visit('./src/index.html')
  });

    it('Seleciona elemento select', () => {
    cy.get('#product')
      .select('blog') // Pegando pelo velue do elemento HTML
      .should('have.value', 'blog')

    cy.get('#product')
      .select('YouTube') // Pegando pelo texto YouTube
      .should('have.value', 'youtube')

    cy.get('#product')
      .select(3) // Pegando pelo indice do seletor 1 - blog 2 - curso 3 - mentoria e 4 - youtube
      .should('have.value', 'mentoria')
  });

    it('Selecionando elemento do tipo, radio', () => {
        cy.get('input[type="radio"][value="ajuda"]')
          .check()
          .should('have.value', 'ajuda')
          .should('be.checked')

        cy.wait(1000)
        cy.get('input[type="radio"][value="elogio"]')
          .check()
          .should('have.value', 'elogio')
          .should('be.checked')

        cy.wait(1000)
        cy.get('input[type="radio"][value="feedback"]')
          .check()
          .should('have.value', 'feedback')
          .should('be.checked')
    });

    it('Marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(($radio) => {
            cy.wrap($radio).check()
            cy.wrap($radio).then(() => {
            cy.wrap($radio).should('have.checked', true)
        })
      })
    })
})