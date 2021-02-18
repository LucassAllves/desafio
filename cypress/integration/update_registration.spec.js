 //referenciando a biblioteca cypress para vsCode nos ajudar reconhecendo nossos it.
/// <reference types ="cypress" /> 

import loc from '../support/locators'// aqui impotamos nossos loctors que serve para deixa o codigo com facil compreensão
import '../support/commands'// chamamos aqui nosso metodo login criado em commads.js

describe('changing registration', () => {
   
    it('Updating telephone', () => {
        cy.login('lucas.alves@coteminas.com.br', '12345678')
        cy.get(loc.ALTERATION.TELEPHONE).type('11987654321')
        cy.get(loc.ALTERATION.BTN_ALTERATION).click()
        cy.get(loc.MESSAGE).should('contain', 'Maravilha! Seu perfil foi atualizado com sucesso')
    })
})