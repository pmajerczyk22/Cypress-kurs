///<reference types="cypress"/>

describe("E2E - Testy API", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        })
    })
    it("Weryfikacja tagów API", () => {
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
        cy.visit("https://angular.realworld.io/");
        cy.wait("@requestTag")
        cy.get("@requestTag").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(200)
            expect(res.response.body.tags).to.contain("welcome").and.to.contain("implementations").and.to.contain("introduction").and.to.contain("codebaseShow")
        })
    })

    it("Niepoprawne logowanie", function() {
            cy.intercept("POST", "https://api.realworld.io/api/users/login").as("requestLogin")
            cy.get("a.nav-link").contains("Sign in").click();
            cy.login("test@gmail.com", "1234$")
            cy.wait("@requestLogin")
            cy.get("@requestLogin").then(res => {
                console.log(res)
                expect(res.response.statusCode).to.equal(403)
                expect(res.response.statusMessage).to.equal(this.daneApi.statusMessage403)
                 
                 
             })
        })
        it("Poprawne logowanie oraz weryfikacja tagów po mocowaniu", function(){
            cy.intercept("GET", "https://api.realworld.io/api/tags", {fixture: 'tags.json'}).as("requestTag");
            cy.login("pr.majerczyk@gmail.com", "Patryk123")
            cy.wait("@requestTag")
            cy.get("@requestTag").then(res => {
                console.log(res)
                expect(res.response.statusCode).to.equal(200)
                expect(res.response.body.tags).to.contain("main").and.to.contain("dogs").and.to.contain("introduction").and.to.contain("cats")
            })
            

        })
        // it("Weryfikacja tagów po mockowaniu", () => {
        //     cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
        //     cy.visit("https://angular.realworld.io/");
        //     cy.wait("@requestTag")
    
            
   // })
})