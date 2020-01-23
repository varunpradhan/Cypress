/// <reference types="Cypress" />

import { Given } from "cypress-cucumber-preprocessor/steps";
import "cypress-ntlm-auth/dist/commands";

import { before } from "mocha";

before(function() {
     cy.fixture('createTestData').then(function(data)
     {
         this.data=data
     })
 })

Given('I import fixture', () => {
    cy.log(this.data.AnimalGroupNo)
})

When('Test When log', () => {
    cy.log('Test When log')
})

Then("Test Then log", () => { 
    cy.log('Test Then log')
})