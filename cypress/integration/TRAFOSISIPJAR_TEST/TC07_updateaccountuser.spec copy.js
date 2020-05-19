
describe('Add Account Pegawai', function(){
    before(function () {
        cy.SignIn()
        
    })

    it('Update User Account', function(){
        //cy.contains('PEGAWAI').trigger('mouseover')
        cy.get('.dropdown-toggle').then(($user)=> {
            const username =  $user.text()
            expect(username).to.contains('PEGAWAI')
        }).trigger('mouseover')
        cy.contains('Ubah Akun').trigger('mouseover').click()
        cy.contains('Akun Pegawai')
        cy.get('form').within(($form)=>{
            cy.get('input').eq(1).type('MALANG')
            cy.get('input').last().type('wwww')
            cy.root().submit()
        })
        cy.get('.alert-dismissable').should('have.text', '\n\t\t\t\t×\n\t\t\t\tData akun berhasil di ubah.\n\t\t\t\t')
    })


    
    
        
    
})

