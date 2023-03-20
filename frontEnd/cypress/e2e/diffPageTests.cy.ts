describe('diff page tests', () => {
  it('should display the difference between the death rates caused by Covid-19', () => {
    cy.visit('http://localhost:5173/')

    cy.intercept(
      'GET',
      'https://dev.kidopilabs.com.br/exercicio/covid.php?listar_paises=1'
    ).as('countryList')

    cy.get('[data-cy="nav-/diff"]').click()

    cy.wait('@countryList')

    cy.get('#selectOpcoes-1').select('Brazil')

    cy.intercept('POST', '/api/covid-stats').as('post-covid-stats')

    cy.get('#selectOpcoes-2').select('Argentina')

    cy.wait('@post-covid-stats').then(({ response }) => {
      if (response && response.statusCode) {
        expect(response.statusCode).to.equal(201)
      } else {
        throw new Error('Não foi possível obter o status da resposta')
      }
    })

    cy.get('[data-cy="card-diff"]').should('be.visible')
  })
})
