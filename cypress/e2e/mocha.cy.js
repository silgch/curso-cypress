describe('Primera suite de pruebas', () =>{
    it('Primer test con mocha',() => {
        cy.log('Primer test con cypress')
    })
    it('Segundo test con mocha',() => {
        cy.log('Primer test con cypress')
    })
})
describe('Segunda suite de pruebas', () =>{
    it.only('Primer test con mocha',() => {
        cy.log('Primer test de la segunda suit con cypress')
    })
    it('Segundo test con mocha',() => {
        cy.log('Primer test con cypress')
    })
})