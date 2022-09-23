///<reference types="cypress"/>
import AlertPage from "../support/page-object/alert-page";

describe("E2E - alerts", () => {
    it("alerts", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")
        AlertPage.clickOnAlert1();
        AlertPage.verifyAlertText("Przykładowa nieprawidłowa treść alertu"); 
    })
    it("Alert confirm", () => {
        AlertPage.clickOnAlert2();
        AlertPage.verifyAlertConfirmText();
        AlertPage.acceptAlert();
    })
})