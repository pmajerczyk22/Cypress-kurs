///<reference types="cypress"/>

describe("E2E - Asercje", () => {
    it("Asercje expect oraz should", () => {
        cy.visit("/")
        //weryfikscjs tekstu 
        cy.get('a[title="Contact Us"]').should("contain", "Contact us")
        cy.get('a[title="Contact Us"]').then(zakladka => {
            expect(zakladka).to.contain("Contact us")
        })
        //Sprawdzenie czy nie zawiera tekstu 
        cy.get('a[title="Contact Us"]').should("not.contain", "al")
        cy.get('a[title="Contact Us"]').then(zakladka => {
            expect(zakladka).not.to.contain("abc");
        })

        //weryfikacja czy znacznik posiada klase
        cy.get("#search_query_top").should("have.class", "form-control")
        cy.get("#search_query_top").then(klasa => {
            expect(klasa).to.have.class("form-control");
        })
        //czy element jest widoczny
        cy.get("#search_query_top").should("be.visible");
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.be.visible;
        })
        //weryfikacja ilosci pobranych elementow
        cy.get("ul.sf-menu").find("li").should("have.length", 14)
        cy.get("ul.sf-menu").find("li").then(zakladki => {
            expect(zakladki).to.have.length(14)
        })

        //weryfikacja wartosci css danego elementu
        cy.get("#search_query_top").should("have.css", "line-height", "45px")
        cy.get("#search_query_top").then(css => {
            expect(css).to.have.css("line-height", "45px")
        })
    })
})