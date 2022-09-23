///<reference types="cypress"/>

describe("E2E - Metoda Invoke", () => {
    it("Invoke", () => {
        cy.visit("/")
        //Pobieranie wartosci z danego elementu
        cy.get('[title="Contact Us"]').invoke("text").then(tekst => {cy.log(tekst)
        })

        //uzyskanie dostepu do wartosci atrybutu
        cy.get('[title="Contact Us"]').invoke("attr", "href").then(link => {cy.log(link)})

        cy.get('[title="Contact Us"]').invoke("attr", "title").then(title => {cy.log(title)})

        //pobieranie wartosci 

        cy.get("#search_query_top").type("Test wlasny").invoke("prop", "checked").then(wartosc => {
            cy.log(wartosc)
        })


    })
    })