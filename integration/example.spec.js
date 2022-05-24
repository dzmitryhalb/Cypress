/<refrence types="cypress" />

const { createYield } = require("typescript")

describe('My first suite', () => {
    it.only('assert property', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        cy.get('[data-name="menu-2"]').click()

        // cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
        //     cy.wrap(input).click()
        //     cy.get('nb-calendar-day-picker').contains('16').click()
        //     cy.wrap(input).invoke('prop', 'value').should('contain', 'May 16, 2022')
        // })
    })
})


let date = new Date()
date.setDate(date.getDate() + 15)

console.log(date)