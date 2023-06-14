/// <reference types="cypress" />

describe("Actividad complementaria 3", () =>{
	// instalar la dependencia cypress-xpath
  // remplazar todos los selectores 'cssSelectors' por expresiones xpath
  // recorda usar el metodo cy.xpath y agregar la dependencia en el archivo e2e.
    it('Actividad complementaria 3', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.xpath("/html/body/div[1]/div/div/div/form/p/span").dblclick();
       
        cy.xpath("//input[@name='user']").type(`pushingit`);
        cy.xpath("//input[@name='pass']").type('123456!');
        cy.xpath("//button[@id='submitForm']").click()
        //cy.get('#todolistlink').click()
        cy.xpath("//a[@id='todolistlink']").click()
        //cy.get("[id^='sen']").type("tarea 1")
        cy.xpath("/html/body/div[1]/div/div[2]/form/div/div/input").type("tarea 1")
       // cy.get('#sendTask').click()
        cy.xpath("//button[@id='sendTask']").click()
        //cy.contains('tarea 1').click()
        cy.xpath("//*[text()='tarea 1']").click()
    });
});