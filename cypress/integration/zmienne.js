///<reference types="cypress"/>

describe("E2E - Zmienne ", () => {
    it("Zmienne srodowiskowe", () => {
        cy.visit(Cypress.env("url"))
    })
})