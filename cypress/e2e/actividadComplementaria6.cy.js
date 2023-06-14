import { ToDoListPage } from "../support/pages/toDoListPage";
import { LoginPage } from "../support/pages/loginPage";

describe('Actividad complementaria 6', () => { 

    const loginPage = new LoginPage();
    //const homePage = new HomePage();
    const toDoListPage = new ToDoListPage();
        
         beforeEach("Actividad complementaria 6", () => {
            cy.visit('');
            cy.get("#registertoggle").dblclick();
            loginPage.escribirUsuario('pushingit');
            loginPage.escribirContraseña('123456!');
            loginPage.clickLoginBtn();
            cy.xpath("//h2[starts-with(@id,'user_pushingit')]").should('exist');
            cy.get('#todolistlink').click();
        });
    
          it("deberia verificar que los botones existen", () =>{
            toDoListPage.devolverTarea('All').should('exist');
            toDoListPage.devolverTarea('Completed').should('exist');
            toDoListPage.devolverTarea('Active').should('exist');
            toDoListPage.devolverTarea('Remove all').should('exist');
        });
     });