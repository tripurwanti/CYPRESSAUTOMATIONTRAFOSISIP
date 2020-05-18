describe('Login', function(){
    it('Sign in', function () {
        cy.visit('http://localhost/TRAFOSISIPJAR/')
        cy.get('input[name="username"]').type('pegawairenup3')
        cy.get('input[name="password"]').type('wwww')
        cy.get('button[type="submit"]').should('be.visible').contains('Login').click()
        cy.contains('Home',{timeout:10000}).should('be.visible')
    })
})