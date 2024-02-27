///<reference types="Cypress" />

describe('Central de Atendimento ao cliente TAT', function() {
  beforeEach(function() { // Roda antes de qualquer coisa
    cy.viewport('iphone-xr')
    cy.visit('./src/index.html')
  })

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

  // Exercicio 02
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    cy.get('#email')
      .type('igorrsilvaa920@gmail,com') // Troquei o ponto por virgula para que o teste de erro

    cy.get('.button[type="submit"]')
      .click()

    cy.get('.error')
      .should('be.visible')
  })

  //Exercicio 03
  it('Valida numero de telefone para aceitar apenas valores numericos', function() {
    cy.get('#phone')
      .type('abc')
      .should('have.value', '')
  })

  //Exercicio 04
  it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
    cy.get('#firstName')
      .type('Igor')

    cy.get('#lastName')
      .type('Silva Francisco')

    cy.get('#email')
      .type('igorrsilvaa920@gmail.com')

    // cy.get('#phone') // Linha comentada para que seja possivel simular o erro
    //   .type('')

    cy.get('#phone-checkbox') // Marca o campo telefone como obrigatório
      // .click()
      .check()

    cy.get('#open-text-area')
      .type('Testando o meu Cypress')

    cy.get('.button[type="submit"]')
      .click()

    cy.get('.error')
      .should('be.visible')
  })

  //Exercicio 05
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
    .type('Igor')
    .should('have.value', 'Igor')
    .clear()
    .should('have.value', '')

  cy.get('#lastName')
    .type('Silva Francisco')
    .should('have.value', 'Silva Francisco')
    .clear()
    .should('have.value', '')

  cy.get('#email')
    .type('igorrsilvaa920@gmail.com')
    .should('have.value', 'igorrsilvaa920@gmail.com')
    .clear()
    .should('have.value', '')

  cy.get('#phone')
    .type('48991196884')
    .should('have.value', '48991196884')
    .clear()
    .should('have.value', '')

  cy.get('#open-text-area')
    .type('Olá mundo')
    .should('have.value', 'Olá mundo')
    .clear()
    .should('have.value', '')
  });

  // Exercicio 06
  it('Exibe mensagem de erro ao preencher formulario sem ter preenchido os campos obrigatórios', () => {
    cy.get('.button[type="submit"]')
      .click()

    cy.get('.error')
      .should('be.visible')
  });

  // Exercicio 07
  it('Enviando formulario com comandos customizados', () => {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success')
      .should('be.visible')
  });

  // Exercicio 08
  it('Verifica login usando contains', () => {
    cy.get('#firstName')
      .type('Igor')

    cy.get('#lastName')
      .type('Silva Francisco')

    cy.get('#email')
      .type('igorrsilvaa920@gmail.com')

    cy.get('#phone')
      .type('48991196884')

    cy.get('#open-text-area')
    .type('Testando o meu Cypress')

    cy.contains('button', 'Enviar')
      .click()
    });
});