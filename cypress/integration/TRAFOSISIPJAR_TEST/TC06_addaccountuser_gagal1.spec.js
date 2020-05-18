
describe('Add Account Pegawai', function(){
    before(function () {
        cy.SignIn()
        
    })

    it('Add Account gagal1', function () {
        cy.get('ul.page-sidebar-menu').children().contains('Akun Pegawai').click()
        cy.url().should('include','PegawaiController/daftarPegawai')
        cy.contains('AKUN PEGAWAI', {timeout:10000}).should('be.visible')
        cy.get('.btn').should('be.visible').contains('Tambah').click()
        cy.url().should('include','PegawaiController/viewTambah')
        cy.contains('Tambah Akun Pegawai')
        cy.get('form').within(($form)=>{
            cy.get('input').first().type('01275683')
            cy.get('input').eq(1).type('test1')
            cy.get('select[name="unit"]').select('ULP Lawang').should('have.value', '51301')
            cy.get('select[name="jabatan"]').select('Manajer ULP Lawang').should('have.value', 'M ULP')
            cy.get('input[name="username"]').type('test1namalengkap')
            cy.get('input[name="password"]').type('wwww')
            cy.root().submit()
        })
        cy.contains('Maaf! NIP sudah digunakan, silakan ganti dengan yang lain.')
    })


    
    
        
    
})

