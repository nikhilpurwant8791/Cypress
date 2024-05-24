import { dpd } from "../../support/pageObjectModel/dropDown";

describe('Test Dummy Website', () => {
    before(() => {
        cy.visit('https://webdriveruniversity.com/index.html');
    })


    it ('Verify dpd', ()=>{
        dpd.getDropDownCheckBox().within(()=> {
            dpd.getHeader().should('have.text', 'DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)');
        })
        dpd.getdpdRadioBtn().invoke('removeAttr', 'target').click();
        dpd.getHeader().should('have.text', 'Dropdown Menu(s), Checkboxe(s) & Radio Button(s)');
        dpd.getdpdLocation().within(()=>{
            dpd.getItemList().each((ele, index)=>{
                const itemList = ["JAVA", "C#", "Python", "SQL"]
                cy.wrap(ele).should('contain.text', itemList[index])
            })
        })
    })
})