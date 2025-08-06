describe('Preencher Formulário', () => {
  it('passes', () => {
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
    
  })
})