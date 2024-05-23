
export default class Testiframe {
    constructor() {
        this.element = {
            iFrame: '[name="globalSqa"]',
            infoPadding: '[class="info_overlay_padding"]'
        }
    }

    getiFramebody() {
        return cy.getiFrame(this.element.iFrame)
            .find(this.element.infoPadding, { timeout: 10000 })
            .eq(0)
            .click({ force: true });
    }

    getTraningName(){
        cy.wait(5000)
       return cy.getiFrame('[name="globalSqa"]');
    }
}
export const iframe =new Testiframe(); 