import { createYield } from "typescript"


function clearSideBar(){
    cy.get('.menu-sidebar.left.fixed').invoke('attr', 'class').then( attr => {
        if( attr.includes('expanded')){
            cy.get('[icon="menu-2-outline"]').click() 
        }
    })

}

function selectGroupMenuItem(groupName){
    cy.contains('a', groupName).then( menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then( attr => {
            if( attr.includes('left')){
                cy.wrap(menu).click()
            }
        })
    })
}

export class NavigationPage{

    formLayoutsPage(){
        //cy.contains('Forms').click()
        
        selectGroupMenuItem('Form')
        cy.contains('Form Layouts').click()
    }

    datepickerPage(){
        //cy.contains('Forms').click()

        selectGroupMenuItem('Form')
        // clearSideBar()
        cy.contains('Datepicker').click()
    }

    toasterPage(){
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Toastr').click()
    }

    smartTablePage(){
        selectGroupMenuItem('Tables & Data')
        cy.contains('Smart Table').click()
    }

    tooltipPage(){
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Tooltip').click()
    }

}

export const navigateTo = new NavigationPage()
