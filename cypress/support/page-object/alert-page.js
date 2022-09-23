class AlertPage{
    get btnAlert1(){
        return cy.get("#alert");
    }
    get btnAlert2(){
        return cy.get("#alert-confirm");
    }
    clickOnAlert1(){
        this.btnAlert1.click();
    }
    clickOnAlert2(){
        this.btnAlert2.click();
    }

    verifyAlertText(tekst){
        cy.on("window:alert", tresc => {
            expect(tresc).to.equal(tekst)
        })

    }

    verifyAlertConfirmText(){
     
        cy.on("window:confirm", content2 =>{
            expect(content2).to.equal("Zaakceptuj aby kontynuować!")
        })
    }

    rejectAlert(){
        cy.on("window:confirm", () => false)
    }

    acceptAlert(){
        cy.on("window:confirm", () => true)
    }
}

export default new AlertPage();