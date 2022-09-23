///<reference types="cypress"/>

describe("E2E - Wgrywanie pliku", () => {
    it("Wgrywanie pliku do inputa w contact us", () => {
        cy.visit("/index.php?controller=contact")
        cy.get("#fileUpload").attachFile("../fixtures/zabka.png");
        cy.get("span.filename").should("contain", "zabka.png");
    })
})