//crea un fixture con las siguientes keys 
//username (el username debe ser inexistente)
//pasword (la password debe ser valida) //123456!
//mensajeError (el mensaje de error lo tienes que copiar de la pagina ) //Credentials were not found



/// <reference types="cypress" />

describe('Actividad complementaria 4', () => {
    //inicializa el fixture
    let datos;

    before('Before',()=>{
        //usa before para acceder al fixture y obtener los datos
        cy.fixture('ActividadComplementaria4').then(datos =>{
            ActividadComplementaria4= datos;
        })  
    }
    )

    beforeEach('Before Each', () =>{
        //beforeEach para visitar la pagina y dirigirse al login
        cy.visit('')
        cy.get('#registertoggle').click();
    })

    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(datos.user);
        cy.get('#pass').type(datos.pass); //la contraseña debe ser valida por el sistema
        cy.get('#submitForm').click();
        cy.get('#errorMessage').should('have.text', /*agrega el mensaje que esta en el fixture */)
    });
});

