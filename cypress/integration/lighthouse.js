describe("Lighthouse test", () => {
    it("Pierwszy test LightHouse", () => {
        cy.visit("https://testowanie-oprogramowania.pl")
        cy.lighthouse({
            performance: 85,
            accessibility: 100,
            "best-practies": 85,
            seo: 85,
            pwa: 100, 
        })
    })
})