///<reference types="Cypress" />

describe('Central de Atendimento ao cliente TAT', function() {
  beforeEach(function() { // Roda antes de qualquer coisa
    // cy.viewport('iphone-xr')
    cy.visit('./src/index.html')
  })

    Cypress._.times(10,()=>{

      it('verifica o titulo da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      })

      //Exercicio 01
      it('Preencha os campos obrigatórios e envia o formulario', function() {

        const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

        cy.get('#firstName')
          .type('Igor')

        cy.get('#lastName')
          .type('Silva Francisco')

        cy.get('#email')
          .type('igorrsilvaa920@gmail.com')

        cy.get('#phone')
          .type('48991196884')

        // cy.get('#open-text-area')
        //   .type('Testando o meu Cypress')
        cy.get('#open-text-area')
          .type(longText, {delay: 0})

        cy.get('.button[type="submit"]')
          .click()

        cy.get('.success')
          .should('be.visible') // Verifica se o elemento esta visivel
      })

    });

    it('Exibe elemtos ocultos e esconde elemntos visiveis', () => {
        cy.get('.success')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Mensagem enviada com sucesso.')

        cy.get('.error')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Valide os campos obrigatórios!')
          .invoke('hide')
          .should('not.be.visible')
    });

    it('Preenche area de texto usando comando invoke', () => {
      const longText = Cypress._.repeat('O Igor é fenomenal\n', 20)

      cy.get('#open-text-area')
        .invoke('val', longText)
        .should('have.value', longText)
    });

    it.only('Requisicao HTTP', () => {
      cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        .should((response)=>{
          const{status, statusText, body} = response
          expect(status).to.equal(200)
          expect(statusText).to.equal('OK')
          expect(body).to.include('CAC TAT')
        })
    });
});


