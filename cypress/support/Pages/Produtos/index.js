const el = require('./elements').ELEMENTS 

class Produtos {

    validarLabelProdutos(){
        cy.get(el.labelProducts).should('have.text','Products')
    }
    
}

export default new Produtos ()