Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
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
})