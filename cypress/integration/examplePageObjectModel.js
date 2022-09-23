///<reference types="cypress"/>

import SelectPage from "../support/page-object/select-page"

describe("E2E - Akcja wybrania opcji select", () => {
    it("Wybieranie opcji", () => {
        cy.visit("/index.php?id_category=3&controller=category#/")
        //Po nazwie
        cy.get("#selectProductSort").select("In stock")
        //Po value
        cy.get("#selectProductSort").select("price:desc")
        //Po indeksach
        cy.get("#selectProductSort").select(7)
    })

    it.only("Choose all options", ()=> {
        cy.visit("/index.php?id_category=3&controller=category#/")
        SelectPage.selectAllOption();
        // cy.get("#selectProductSort").then(select => {
        //     cy.wrap(select).find("option").each(option => {
        //         cy.wrap(select).select(option.text())
        //     })
        // })
    })
})