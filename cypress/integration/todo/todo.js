/// <reference types="Cypress" />
import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";
import TodoPage from "../../page-objects/todo-page";
import values from "../../fixtures/values.json";

Given("User open todo application", () => {
	cy.visit("/");
	//verify the page
	cy.title().should("eq", TodoPage.pageTitle);
	cy.url().should("eq", TodoPage.url);
	// Verify the content
	cy.visibleAndContainText("h1", TodoPage.PageH1);
	cy.get(TodoPage.todoInput)
		.invoke("attr", "placeholder")
		.should("eq", TodoPage.placeHolderText);
	cy.visibleAndContainText(TodoPage.addButton, "Add");
	cy.visibleAndContainText(TodoPage.counter, "0");
});

When("Enter todo item", () => {
	cy.enterAndVerifyTodoItem(TodoPage.todoInput, values[0]);
});

And("Click on Add button", () => {
	cy.get(TodoPage.addButton).click();
});

Then("Todo item should be added", () => {
	cy.get(TodoPage.todoList).should("have.length", 1);
	cy.visibleAndContainText(TodoPage.todoList, values[0]);
});

And("Counter should be increased", () => {
	cy.visibleAndContainText("h1", "1");
});

When("Click on todo checkbox", () => {
	cy.get(TodoPage.todoList).find("input").should("be.visible").click();
});

Then("Todo item should be removed form the list", () => {
	cy.get(TodoPage.todoList).should("have.length", 0);
});

And("Count should be 0", () => {
	cy.visibleAndContainText("h1", "0");
});

When("Enter todo lists and click on Add", () => {
	values.forEach((value, i) => {
		cy.enterAndVerifyTodoItem(TodoPage.todoInput, value);
		cy.get(TodoPage.addButton).click();
		cy.get(TodoPage.todoList).should("have.length", i + 1);
		cy.visibleAndContainText(TodoPage.todoList, value);
	});
});

Then("Todo item list should be shown", () => {
	cy.get(TodoPage.todoList).should("have.length", values.length);
});

And("Counter should be increased based on list", () => {
	cy.visibleAndContainText("h1", "7");
});

When("Click on todo checkbox for each list item", () => {
	values.forEach((i) => {
		cy.get(TodoPage.todoList)
			.eq(0)
			.find("input")
			.click()
			.should("not.exist");
	});
});
