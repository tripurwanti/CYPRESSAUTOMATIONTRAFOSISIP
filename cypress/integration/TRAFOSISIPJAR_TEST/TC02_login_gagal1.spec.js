describe('Login', function(){
    it('Sign in', function () {
        cy.visit('http://localhost/TRAFOSISIPJAR/')
        cy.get('button[type="submit"]').should('be.visible').contains('Login').click()
        cy.contains('SISTEM PENGELOLAAM LEMBAR KERJA ANGGARAN INVESTASI')
        cy.contains('Login')
        
    })
})