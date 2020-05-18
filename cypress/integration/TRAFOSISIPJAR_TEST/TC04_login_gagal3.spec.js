describe('Login', function(){
    it('Sign in', function () {
        cy.visit('http://localhost/TRAFOSISIPJAR/')
        cy.get('form').within(($form) =>{
            cy.get('input[name="username"]').type('pegawairenup3')
            cy.get('input[name="password"]').type('www123')
            cy.root().submit()
        })
    })
    cy.contains('Password yang anda masukkan salah')
})