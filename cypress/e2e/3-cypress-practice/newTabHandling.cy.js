import { wh } from "../../support/pageObjectModel/windowHandling";

describe("Window Handling", () => {

    beforeEach(() => {
        cy.visitURL(wh.tab.url);
    })

    it('Handle the page opening in new tab', () => {
        wh.getRemoveAttrMethod()
            .invoke('removeAttr', 'target').click();
        wh.getURLforValidation().should('include', '/#');
    })
})