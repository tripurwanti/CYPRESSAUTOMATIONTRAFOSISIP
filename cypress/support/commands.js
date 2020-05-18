// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add("SignIn", ()=>{
    cy.visit('')
        cy.title().should('eq','LKAI | TRAFO SISIPAN')
        cy.location('protocol').should('eq','http:')
        cy.get('form').within(($form)=>{
            cy.get('input[name="username"]').type('pegawairenup3')
            cy.get('input[name="password"]').type('wwww')
            cy.root().submit()
        })
        cy.contains('Home',{timeout:10000}).should('be.visible')
})
