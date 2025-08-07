/// <reference types='cypress' />

import Login from "../support/Pages/Login"
import Produtos from "../support/Pages/Produtos"

describe('Tipos de Login', () => {
    it.only('Realizar login com sucesso', () => {
       
        Login.acessarURLSauce()
        Login.preencherUsuaro('standard_user')
        Login.preencherSenha('secret_sauce')
        Login.clicarLogin()
        Produtos.validarLabelProdutos()
    })
   
    it('Validar mensagem de senha obrigatoria', () => {

        Login.acessarURLSauce()
        Login.preencherUsuaro('standard_user')
        Login.clicarLogin()
        Login.msgErroLogin('Epic sadface: Password is required')
    })

    it('Validar mensagem de senha obrigatoria',() => {

        Login.acessarURLSauce()
        Login.preencherSenha('secret_sauce')
        Login.clicarLogin()
        Login.msgErroLogin('Epic sadface: Username is required')
    })

// proxima aula segunda-feira, 28 de julho
    
})