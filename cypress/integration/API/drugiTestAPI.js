///<reference types="cypress"/>

describe("Wykonywanie zapytanie bezpośrednio do API", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        })
    })
    it("Autoryzacja + Dodawanie nowego wpisu ", () => {
        const daneAutoryzacja = {"user": {
              "email": "pr.majerczyk@gmail.com",
              "password": "Patryk123"
            }
          }

        const daneArtykul = {
            "article": {
                "tagList": ["test"], 
                "title": "przesylka bezposrednio z API", 
                "description": "test", 
                "body": "test test test"
            }
        }
        cy.request("POST", "https://api.realworld.io/api/users/login", daneAutoryzacja)
        .its("body").then(res => {
            const authToken = res.user.token;
            
            cy.request({
              method: "POST", 
              url: "https://api.realworld.io/api/articles/",
              body: daneArtykul,
              headers: {'Authorization': 'Token '+ authToken }
            }).then(res => {
                expect(res.status).to.equal(200)
            })
        })
    })


        })
        // it("Weryfikacja tagów po mockowaniu", () => {
        //     cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
        //     cy.visit("https://angular.realworld.io/");
        //     cy.wait("@requestTag")
    
            
   // })
