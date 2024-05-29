import tooltip from '../../fixtures/tooltipArray.json'

export default class Common {
    constructor() {
        this.ele = {
            tooltipWebelement: ".fs-tooltip .fs-tooltip-content",
        }
        this.radio ={
            url : "https://artoftesting.com/samplesiteforselenium",
            male : '#male',
            commoneleforRadioBtn: '[action="#"] [type="radio"]',

        }
    }
    getTooltipWebelement() {
        return cy.get(this.ele.tooltipWebelement);
    }
    returnTestDataforTooltip() {
        return tooltip['tooltip'];
    }

    getmultiplRadioBtnElement(){
        return cy.get(common.radio.commoneleforRadioBtn);
    }
}
export const common = new Common();