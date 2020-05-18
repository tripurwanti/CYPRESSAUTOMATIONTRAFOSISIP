describe('Login', function(){
    it('Sign in', function () {
        cy.visit('http://localhost/TRAFOSISIPJAR/')
        cy.get('form').within(($form) =>{
            cy.get('input[name="username"]').type('pegawairen')
            cy.get('input[name="password"]').type('wwww')
            cy.root().submit()
        })
        cy.contains('Username yang anda masukkan salah')
        
    })
})