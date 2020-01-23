// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-ntlm-auth/dist/commands';


// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')

before(() => {
    cy.log('Global Before Hook');
    //cy.ntlm('http://amtbelvmdrdiis6', 'pradhanv', 'V@rPr@171!')
  });

after(() => {
    cy.log('Global After Hook');
    //cy.get("button[title='Logout']").click()
  });