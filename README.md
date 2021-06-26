# Node Todo App

A Node app built with MongoDB and Angular.

Node provides the RESTful API. Angular provides the frontend and accesses the API. MongoDB stores the data.

## Requirements

- [Node and npm](http://nodejs.org)
- MongoDB: Make sure you have your own local MongoDB running. Set environment variable `MONGO_CONNECTION_STRING` to overwrite the default config

## Installation

1. Clone the repository: `git clone git@github.com:fashioncloud/node-todo.git`
2. Install the application: `npm install`
3. Start the server: `npm start`
4. View in browser at `http://localhost:8080`

# Todo App Automation
Cypress Automation using BDD (Cucumber)

## Project Description:
* Project setup with Cypress and Cucumber plugin
* Tests are Written in javascript
* test scripts are in the `./integration` directory
* Page objects are in the `./page-objects` directory
* test data are in the `./fixtures` directory

## Run tests:
* `npm run test` - To Runs test

## Test Reports:
* Test results will be available in `./allure-results` directory
* After test complete allure-report will open in chrome browser