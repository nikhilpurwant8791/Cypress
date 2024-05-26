import {iframe} from '../../support/pageObjectModel/Testiframe.js';

describe('IFrame Handling', () => {
    before(() => {
        cy.visitURL(iframe.element.url);
    })

    it('use iFrame command to handle it', () => {
        iframe.getiFramebody();
        iframe.getTraningName().contains('Selenium 3.0 Training').should('be.visible')
    })
})