const el = require('./elements').ELEMENTS

class Login {

    acessarURLSauce(url){
        cy.visit(el.url)
        cy.get(el.imgSwagLabs).should('be.visible')
    }

    preencherUsuaro(campoUserName){
        cy.get(el.campoUserName).type(campoUserName)
    }

    preencherSenha(campoPassWord){
        cy.get(el.campoPassWord).type(campoPassWord)
    }

    clicarLogin(botaoLogin){
        cy.get(el.botaoLogin).click()
    }

    msgErroLogin(erroLogin){
        cy.get(el.msgErroLogin).should('have.text', erroLogin)
    }

}

export default new Login ()