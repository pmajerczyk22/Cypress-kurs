class SelectPage {
    get select(){
        return cy.get("#selectProductSort");
    }
    selectAllOption(){
        this.select.then(select => {
            cy.wrap(select).find("option").each(option => {
                cy.wrap(select).select(option.text())
            }) 
        })    
    
    }
}

export default new SelectPage();
