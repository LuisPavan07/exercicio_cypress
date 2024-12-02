/// <reference types="cypress" />

describe("Testes para a agenda de contatos", () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it("Deve adicionar um novo contato", () => {
        cy.get('input[type="text"]').type("Luis Pavan")
        cy.get('input[type="email"]').type("LP@gmail.com")
        cy.get('input[type="tel"]').type("123456789")
        cy.contains('Adicionar').click()
        cy.screenshot('teste-inclusão')
    })

    it("Deve editar um contato", () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type("Luis H. Pavan")
        cy.get('input[type="email"]').clear().type("LHP@gmail.com")
        cy.get('input[type="tel"]').clear().type("1987654321")
        cy.get('.alterar').click()
        cy.screenshot('teste-alteracao')
    })

    it("Deve remover um contato da lista", () => {
        cy.get(":nth-child(5) > .sc-gueYoa > .delete").click()
        cy.screenshot("teste-remocao")
    })
})
