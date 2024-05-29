
describe('Verify the Checkbox', () => {
    beforeEach(() => {
        cy.visitURL('https://artoftesting.com/samplesiteforselenium');
    })

    it('Verify checkbox is checked', () => {
        cy.get('.Automation').check().should('be.checked');
    })

    it ('Verify checkbox is not checked', ()=>{
        cy.get('.Performance').check().should('be.checked');
        cy.get('.Performance').uncheck().should('not.be.checked');
    })

    it('Check multiple checkboxes', ()=>{
        cy.get('[action="#"] [type="checkbox"]').as('multi');
        cy.get('@multi').check(['Automation', 'Performance']);
        cy.get('@multi').should('be.checked');
    })

    it('UnCheck multiple checkboxes', ()=>{
        cy.get('[action="#"] [type="checkbox"]').as('multi');
        cy.get('@multi').check(['Automation', 'Performance']);
        cy.get('@multi').uncheck(['Automation', 'Performance']);
        cy.get('@multi').should('not.be.checked');
    })
})