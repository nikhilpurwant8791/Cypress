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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('visitURL', (url)=>{
        cy.visit(url);
        return cy.viewport(1440, 1168);
})

Cypress.Commands.add('getiFrame', (selector) => {
    return cy.get(selector)
        .its('0.contentDocument.body')
        .should('not.be.undefined')
        .then(cy.wrap);
})

Cypress.Commands.add('newWindowHandling', (url)=>{
   return cy.window().then((win) => {
        return cy.stub(win, 'open').callsFake(()=> {
            win.location.href = url;
        });
    });
})

