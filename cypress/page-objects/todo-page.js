/// <reference types="Cypress" />
class TodoPage {
    // Labels
    pageTitle = "Node/Angular Todo App";
    url = "http://localhost:8080/";
    PageH1 = "Simple ToDo List 0"
    placeHolderText = "Get Milk";

    // locators
    todoInput = 'input[ng-model="formData.text"]';
    addButton = 'button[type="submit"]';
    counter = 'span.ng-binding';
    todoList = '[ng-repeat="todo in todos"] .ng-binding';

};

module.exports= new TodoPage();
