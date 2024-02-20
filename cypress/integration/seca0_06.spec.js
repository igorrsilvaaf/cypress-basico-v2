///<reference types="Cypress" />

describe('Upload de arquivos', () => {
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
});