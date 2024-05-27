
describe('Verify Accordian and text affects', () => {
    /* Approach Used
        * Instead of using POM, create the alias and use it.
        * Run each loop to verify the each buttun and text
        * Verify the css property of "cursor"
        * Created fixture file to save the text
    */

    let accordianText
    before(() => {
        cy.visitURL('https://webdriveruniversity.com/index.html');
        cy.fixture('accordianText').then((data) => {
            accordianText = data;
        })
    })

    it('click Accordian section and handle the new tab opening', () => {
        cy.get('.col-md-12 #page-object-model').eq(1).as('header');
        cy.get('@header').scrollIntoView({ easing: 'linear' }).should('be.visible');
        cy.get('@header').invoke('removeAttr', 'target').click();
        cy.get('.accordion').each((ele, index) => {
            if (ele.text() === 'Manual Testing') {
                cy.wrap(ele)
                    .should('have.css', 'cursor', 'pointer')
                    .click();
                cy.get('.panel p').eq(index)
                    .should('have.text', accordianText.Manual)
                    .and('be.visible');
            }
            else if (ele.text() === 'Cucumber BDD') {
                cy.wrap(ele)
                    .should('have.css', 'cursor', 'pointer')
                    .click();
                cy.get('.panel p').eq(index)
                    .should('have.text', accordianText.Cucumber)
                    .and('be.visible');
            }
            else if (ele.text() === 'Automation Testing') {
                cy.wrap(ele)
                    .should('have.css', 'cursor', 'pointer')
                    .click();
                cy.get('.panel p').eq(index)
                    .should('have.text', accordianText.Automation)
                    .and('be.visible');
            }
        })
    })
})