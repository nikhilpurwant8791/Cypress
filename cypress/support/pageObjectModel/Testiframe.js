
export default class Testiframe {
    constructor() {
        this.element = {
            url: 'https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame',
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
       return cy.getiFrame(this.element.iFrame);
    }
}
export const iframe =new Testiframe(); 