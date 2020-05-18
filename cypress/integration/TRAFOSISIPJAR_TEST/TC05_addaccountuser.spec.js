
describe('Add Account Pegawai', function(){
    before(function () {
        cy.SignIn()
        
    })

    it('Add Account berhasil', function () {
        // cy.visit('http://localhost/TRAFOSISIPJAR/')
        // cy.title().should('eq','LKAI | TRAFOSISIPAN')
        // cy.location('protocol').should('eq','http')
        // cy.get('form').within(($form)=>{
        //     cy.get('input[name="username"]').type('pegawairenup3')
        //     cy.get('input[name="password"]').type('wwww')
        //     cy.root().submit()
        // })
        // cy.get('input[name="username"]').type('pegawairenup3')
        // cy.get('input[name="password"]').type('wwww')
        // cy.get('button[type="submit"]').should('be.visible').contains('Login').click()
        cy.contains('Akun Pegawai').click()
        cy.url().should('include','PegawaiController/daftarPegawai')
        cy.contains('AKUN PEGAWAI', {timeout:10000}).should('be.visible')
        cy.get('.btn').should('be.visible').contains('Tambah').click()
        cy.url().should('include','PegawaiController/viewTambah')
        cy.contains('Tambah Akun Pegawai')
        cy.get('form').within(($form)=>{
            cy.get('input[placeholder="NIP"]').type('01275683')
            cy.get('input[placeholder="Nama Lengkap"]').type('test1')
            cy.get('select[name="unit"]').select('ULP Lawang').should('have.value', '51301')
            cy.get('select[name="jabatan"]').select('Manajer ULP Lawang').should('have.value', 'M ULP')
            cy.get('input[name="username"]').type('test1namalengkap')
            cy.get('input[name="password"]').type('wwww')
            cy.root().submit()
        })
        //cy.contains('Berhasil menambahkan akun')
        cy.contains('Maaf! NIP sudah digunakan, silakan ganti dengan yang lain.')
    })


    
    
        
    
})

