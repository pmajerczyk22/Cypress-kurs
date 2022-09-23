///<reference types="cypress"/>

describe("E2E - Akcja wpisywania", () => {
    it("Wpisywanie wartosci w pole", () => {
        cy.visit("/")
        cy.searchPhrase("Przykładowy produkt{backspace}", 12);
       // cy.get("#search_query_top").type("Przykładowy produkt{backspace}", {delay: 500})
    })
it("Czyszczenie wartości z pola input", () => {
    cy.visit("/")
    cy.clearField();
})    


})