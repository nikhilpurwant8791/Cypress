import {iframe} from '../../support/pageObjectModel/Testiframe.js';

describe('IFrame Handling', () => {
    before(() => {
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
    })

    it('use iFrame command to handle it', () => {
        iframe.getiFramebody();
        iframe.getTraningName().contains('Selenium 3.0 Training').should('be.visible')
    })
})