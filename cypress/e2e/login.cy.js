/// <reference types="cypress" />

describe('', () => {


    it('Actividad complementaria', () => {
        cy.log(numeroRandom)
        cy.log(`${numeroRandom}`)
        cy.visit('/')
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('[value="Male"]').check({ force: true })
        cy.get('#day').select('11')
        cy.get('#month').select('March')
        cy.get('#year').select(40)
        cy.get('#submitForm').click()
    })
})
