
describe('Verify the Alerts', ()=>{
    /*
    # Cypress have ability to handle the alerts automatically
    */

    let verify;
    beforeEach(()=>{
        cy.visitURL('https://demo.automationtesting.in/Alerts.html');
    })

    it('verify the alert (handled automatically)', ()=>{
        cy.get('.tabpane .active a').click();
        cy.get('#CancelTab button').click();
        cy.get('#CancelTab p').should('have.text','You pressed Ok').and('be.visible');
        cy.get('#CancelTab p').should('not.have.text','You pressed Cancel');
    })

    it('Verify the message in Alert - Negative Test', ()=>{
        cy.get('.tabpane .active a').click();
        cy.get('#OKTab button').click();
        //this is not cypress command hence probably assertion will not get handled
        cy.on('window:alert', (alert)=>{
            expect(alert).to.equal('Wrong text'); // here error occured and next line not executed
            verify = true; // Hence verify remains undefined
        });
        cy.should(()=>{
            expect(verify).to.be.true; // From above, "verify" is never been called hence this assertion fails and TC also fails.
        })
    })

    it('Verfiy the message in alert - Happy Path', ()=>{
        cy.get('.tabpane .active a').click();
        cy.get('#OKTab button').click();
        cy.on('window:alert', (verifyText)=>{
            expect(verifyText).to.equal('I am an alert box!');
            verify = true;
        })
        cy.should(()=>{
            expect(verify).to.be.true;
        })
    })

    it('Verify OK button on the alerts', ()=>{
        cy.get('.tabpane .active a').click();
        cy.get('#CancelTab button').click();
        // To click ok button use following approach
        cy.on('window:confirm', ()=>{
            return true;
        })
        cy.get('#CancelTab p').should('have.text','You pressed Ok').and('be.visible');
    }) 

    it('Verify cancel button on the alerts', ()=>{
        cy.get('.tabpane .active a').click();
        cy.get('#CancelTab button').click();
        // To click cancel button use following approach
        cy.on('window:confirm', ()=>{
            return false;
        })
        cy.get('#CancelTab p').should('have.text','You Pressed Cancel').and('be.visible');
    })
})