describe('Upload bukti UID', () => {
 
    before(function () {
    cy.SignIn()
        
    })
      
    it('unsuccessfully uploads bukti UID', () => {
        cy.get('ul.page-sidebar-menu').children().contains('Usulan Trafo').click()
        cy.get('.btn').contains('Rincian').first().click()
        cy.get('ul.nav-tabs').children().contains('Bukti UID').click()
        cy.get('input[type="file"]').then(subject => {
            return cy.fixture('uid.jpg', 'base64')
              .then(Cypress.Blob.base64StringToBlob)
              .then(blob => {
                console.log('blob', blob)
                const el = subject[0]
                if (el != null) {
                    const testFile = new File([blob], 'uid.jpg')
                    const dataTransfer = new DataTransfer()
                    dataTransfer.items.add(testFile)
                    el.files = dataTransfer.files
                }
                return subject          
            })
        })
        cy.get('.btn-primary').contains('Unggah').click()
        cy.contains('Maaf! Usulan belum disetujui olah Manajer UP3.')
    });
});
       

