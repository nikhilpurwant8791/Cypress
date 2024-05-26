export default class WindowHandling {
    constructor() {
        this.tab = {
            url: 'https://www.globalsqa.com/demo-site/frames-and-windows/',
            btn: '.button_hilite',
        };

        this.newWindow = {
            url: 'https://demo.automationtesting.in/Windows.html',
            btn: '.analystic',
            newURL: 'https://www.selenium.dev/',
            newbtn: '#Seperate .btn',
            newOriginValidationText: 'Selenium',

        }
    }

    getRemoveAttrMethod() {
        return cy.get(this.tab.btn).eq(0);
    }

    getURLforValidation() {
        return cy.url();
    }

    getNewWindowElement() {
        return cy.get(this.newWindow.btn).eq(0);
    }

    getNewWindowbtn() {
        return cy.get(this.newWindow.newbtn);
    }
}

export const wh = new WindowHandling();