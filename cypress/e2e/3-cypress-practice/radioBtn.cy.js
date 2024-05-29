import { common } from "../../support/pageObjectModel/common";

describe('Verify Radio Button', () => {
    beforeEach(() => {
        cy.visitURL(common.radio.url);
    })

    // Verify single radio button check
    it('check the radio button', () => {
        cy.get(common.radio.male).check().should('be.checked');
    })

    //use first() method
    it('Verify first radio button is checked', () => {
        common.getmultiplRadioBtnElement().as('multiRadiobtn');
        cy.get('@multiRadiobtn').first().check().should('be.checked');

        //extra check to verify the radio button. using "value" property
        cy.get('@multiRadiobtn').first().then((data) => {
            expect(data.val()).to.be.equal('male');
        })
    })

    // use "index" to select the checkbox and verify using "value" property
    it('Verify second radio button', () =>{
        common.getmultiplRadioBtnElement().as('multiRadiobtn');
        cy.get('@multiRadiobtn').eq(1).check().should('be.checked');

        //Extra check to verify the correct radio button is checked
        cy.get('@multiRadiobtn').eq(1).then((data)=>{
            expect(data.val()).to.be.equal('female');
        })
    })
})