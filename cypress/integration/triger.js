///<reference types="cypress"/>

describe("E2E - skrolowanie / najechanie", () => {
    it("najechanie na dany element", () => {
        cy.visit("/")
        cy.get('a[title="Dresses"]').eq(1).trigger("focus")
        cy.get('li.sfHover a[title="Summer Dresses"]').click();
    })
    it("skrolowanie do boxa special", () =>{
        cy.get('a[title="Specials"]').first().scrollIntoView();
    } )
})