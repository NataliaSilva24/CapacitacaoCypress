/// <reference types='cypress' />

describe('Formulário', () => {
  it('Preencher Formulário', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    
    // Dados Pessoais 
    cy.get('#name').type('Isaac Gustavo Rodrigo Caldeira')
    cy.get('#email').type('isaac_caldeira@recantoalmeida.com.br')
    cy.get('input[placeholder="Enter Phone"]').type('99246-1092')
    cy.get('#textarea').type('Descubra')
    cy.get('#female').click()

    // Selecionar dia - TIPO DE SELEÇÃO checkbox
    cy.get('input[type="checkbox"]').check('sunday')
    cy.get('input[type="checkbox"]').check('tuesday')
    cy.get('input[type="checkbox"]').check('monday')

    // Selecionar País, cor e animal - TIPO DE SELEÇÃO select
    cy.get('#country').select('Japan')
    cy.get('#colors').select('Green')
    cy.get('#animals').select('Cat')

    // Selecionar data Calendário 
    cy.get('#datepicker').click()
    cy.get('a[data-date="10"]').click()

    cy.get('#txtDate').click()
    cy.get('a[data-date="20"]').click()

    // Validar data selecionada está correta
    cy.get('#datepicker').first().should('have.value', '08/10/2025')
    cy.get('#txtDate').first().should('have.value', '20/08/2025')
    
    // Selecionar imagem 1
    cy.get('#singleFileInput').selectFile('cypress\\fixtures\\batman.jpg')

    // Validar escolha da imagem 1
    cy.get('#singleFileInput').should('have.value','C:\\fakepath\\cypress\\fixtures\\batman.jpg')

    //anexar imagem 1
    cy.get('#singleFileForm').find('button').click()

    // Validar que a imagem 1 foi anexada
    cy.get('#singleFileStatus').should('exist')

    // Selecionar imagem 2
    cy.get('#multipleFilesInput').selectFile('cypress\\fixtures\\capitao.jpg')

    // Validar escolha da imagem 2
    cy.get('#multipleFilesInput').should('have.value','C:\\fakepath\\cypress\\fixtures\\capitao.jpg')

    //anexar imagem 1
    cy.get('#multipleFilesForm').find('button').click

    // Validar que a imagem 2 foi anexada
    cy.get('#multipleFilesStatus').should('exist')
    
  })

  it.only('Validar tipos de botão', () =>{
    cy.visit('https://testautomationpractice.blogspot.com/')

    cy.get('button[name="start"]').click()
    cy.get('button[name="stop"]').should('be.visible')

  })


})

