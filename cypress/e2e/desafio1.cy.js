


// 3. Ingresar en la sección “To Do List”
// 4. Ingresar una nueva tarea
// 5. Completar la tarea clickeando en la misma

/// <reference types="cypress" />

describe('Desafío 1: Registro', () =>{
    it('Primer desafìo', () =>{
    // 1. Ingresar en “https://pushing-front.vercel.app/”
    cy.visit('');
    // 2. Completar todos sus datos para realizar el registro.
    cy.get('#user').type(`chivi11`);
    cy.get('input#pass').type(`pushingit!123`);
    cy.get('fieldset').find('[value="Female"]').check({ force: true });
    cy.get('#day').select('7')
    cy.get('#month').select('May')
    cy.get('#year').select('1990')
    cy.get('#submitForm').click()
    // 4. Ingresar una nueva tarea
    cy.get('#todolistlink').click()
    cy.get("[id^='sen']").type("Desafio 1")
    cy.get('#sendTask').click()
    // 5. Completar la tarea clickeando en la misma
    cy.contains('Desafio 1').click()
    });

});