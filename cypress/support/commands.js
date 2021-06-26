/// <reference types="Cypress" />

Cypress.Commands.add("visibleAndContainText", (elm, text) => {
	cy.get(elm).should("be.visible").contains(text);
});

Cypress.Commands.add("enterAndVerifyTodoItem", (elm, text) => {
	cy.get(elm).type(text).should("have.value", text);
});

