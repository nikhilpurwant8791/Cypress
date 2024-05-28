import { common } from "../../support/pageObjectModel/common";

describe('Verify the Tooltip text', () => {
    beforeEach(() => {
        cy.visitURL('https://formstone.it/components/tooltip/');
    })

    // use of forEach loop to run multiple test scenario using Fixture file
    common.returnTestDataforTooltip().forEach((data) => {
        it(`Verify ${data.name} side tooltip Text`, () => {
            cy.get(`[data-title="${data.name} Tooltip"]`).trigger('mouseover');
            cy.wait(1000);
            common.getTooltipWebelement().should('be.visible')
                .and('have.text', `${data.name} Tooltip`);
        })
    })
})