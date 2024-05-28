import tooltip from '../../fixtures/tooltipArray.json'

export default class Common {
    constructor() {
        this.ele = {
            tooltipWebelement: ".fs-tooltip .fs-tooltip-content",

        }
    }
    getTooltipWebelement() {
        return cy.get(this.ele.tooltipWebelement);
    }
    returnTestDataforTooltip() {
        return tooltip['tooltip'];
    }
}
export const common = new Common();