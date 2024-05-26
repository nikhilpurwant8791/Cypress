
export default class DropDown {
    constructor() {
        this.ele = {
            url: 'https://webdriveruniversity.com/index.html',
            radiobtn: '#dropdown-checkboxes-radiobuttons',
            header: 'h1',
            location: '.col-sm-4',
            menu: '#dropdowm-menu-1'
        }
    }

    getDropDownCheckBox() {
        return cy.get('#dropdown-checkboxes-radiobuttons').scrollIntoView();
    }
    getdpdRadioBtn() {
        return cy.get(this.ele.radiobtn);
    }
    getHeader() {
        return cy.get(this.ele.header);
    }
    getdpdLocation() {
        return cy.get(this.ele.location).eq(0);
    }
    getItemList() {
        return cy.get(this.ele.menu).find('option');
    }
}

export const dpd = new DropDown();