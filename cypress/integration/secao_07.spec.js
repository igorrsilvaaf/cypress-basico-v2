///<reference types="Cypress" />
describe('Fazendo upload de arquivos', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    });

    it('Seleciona anexo', () => {
        cy.get('#file-upload[type="file"]')
            .selectFile('cypress/fixtures/example.json')
            .should(($input) => {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    });

    it('Seleciona um arquivo usando drag-and-drop', () => {
        cy.get('#file-upload[type="file"]')
            .selectFile('cypress/fixtures/example.json', {action: "drag-drop"})
            .should(($input) => {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    });

    it.only('seleciona um arquivo utilizando uma fixture com alias', () => {
        cy.fixture('example.json').as('fileExample')

        cy.get('#file-upload[type="file"]')
            .selectFile('@fileExample')
            .should(($input) => {
                expect($input[0].files[0].name).to.equal('example.json')
            })     
    });
});