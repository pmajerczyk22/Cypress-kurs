///<reference types="cypress"/>

describe("E2E - Lesson ", () => {
    it("Should open home page -automationpractice", () => {
        cy.visit("/")

        //Po znaczniku 
        cy.get("a");

        //identyfikator
        cy.get("#search_query_top")

        //Po klasie
        cy.get("") 

    })
})