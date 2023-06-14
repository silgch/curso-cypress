export class ToDoListPage {
    constructor() {
        this.tareaInput = '#task';
        this.sendtaskBtn = '#sendTask';
    };

    escribirTarea(tarea) {
        cy.get(this.tareaInput).type(tarea);
    };

    clickSendButton() {
        cy.get(this.sendtaskBtn).click();
    };

    completarTarea(tarea) {
        cy.contains(tarea).click();
    }

    devolverTarea(tarea){
        return cy.contains(tarea)
    }
};