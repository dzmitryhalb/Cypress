const { wrap } = require("module")
const { onDatePickerPage } = require("../support/page_objects/datePickerPage")
const { onFormLayoutsPage } = require("../support/page_objects/formLayoutsPage")
const {navigateTo } = require("../support/page_objects/navigationPage")
const { onSmartTablePage } = require("../support/page_objects/smartTablePage")

function clearSideBar(){
    cy.get('.menu-sidebar.left.fixed').invoke('attr', 'class').then( attr => {
        if( attr.includes('expanded')){
            cy.get('[icon="menu-2-outline"]').click() 
        }
    })

}

describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage()
    })

    it.only('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
            
    
        navigateTo.formLayoutsPage()
        clearSideBar()
        onFormLayoutsPage.submitInlineFormWithNameEmail('Dzmitry', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
        cy.get('[data-name="menu-2"]').click()
        navigateTo.datepickerPage()
        clearSideBar()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selcetDatepickerWithRangeFromToday(7,14)
        navigateTo.smartTablePage()
        clearSideBar()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Dzmitry', 'Halb')
        onSmartTablePage.updateAgeByFirstName('Dzmitry', '30')
        onSmartTablePage.deleteRowByIndex(1)

    })

})