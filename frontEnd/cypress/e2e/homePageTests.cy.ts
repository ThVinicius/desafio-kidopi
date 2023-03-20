describe('home page tests', () => {
  it('should display the information of deaths caused by Covid-19', () => {
    cy.visit('http://localhost:5173/')

    cy.intercept('POST', '/api/covid-stats').as('post-covid-stats')

    cy.get('#selectOpcoes').select('Brazil')

    cy.wait('@post-covid-stats').then(({ response }) => {
      if (response && response.statusCode) {
        expect(response.statusCode).to.equal(201)
      } else {
        throw new Error('Não foi possível obter o status da resposta')
      }
    })

    cy.get('[data-cy="table"]').should('be.visible')
  })
})
