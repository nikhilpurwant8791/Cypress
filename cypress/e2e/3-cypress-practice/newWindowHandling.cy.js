import { wh } from "../../support/pageObjectModel/windowHandling";

describe("Window Handling", () => {

    beforeEach(() => {
        cy.visitURL(wh.newWindow.url);
    })

    it('Handle the new Window opening', () => {
        wh.getNewWindowElement().click();
        cy.newWindowHandling(wh.newWindow.newURL).as("newWindow");
        wh.getNewWindowbtn().click();
        cy.get('@newWindow').should("be.called");
        // Base URL changed, hence need to update the origin (Host URL) to get the results.
        cy.origin('https://www.selenium.dev/', () => {
            cy.url().should('eq', 'https://www.selenium.dev/');
            cy.contains('Selenium').should('be.visible');
        })

    })
})