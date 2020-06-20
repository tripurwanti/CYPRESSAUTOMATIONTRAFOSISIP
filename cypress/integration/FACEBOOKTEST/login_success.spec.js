describe('Login', function(){
    beforeEach(function() {
        cy.visit("https://facebook.com")
    }); 
    it('Login_facebook', function () {
        cy.get('input[type="email"]').type('coba@gmail.com')
        cy.get('#pass').type('coba123')
        cy.get('#u_0_b').should('be.visible').contains('Login').click()
        cy.contains('Beranda')
        cy.contains('Apa yang Anda pikirkan')
        
    })
})