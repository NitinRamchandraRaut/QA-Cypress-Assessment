
describe('Create Account Suite',()=>{

    it('Create Account Test',()=>{

        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")

        cy.get("#firstname").type("Nitin")
        cy.get("#lastname").type("Raut")
        cy.get("#email_address").type("Nitinraut289@gmail.com")
        cy.get("#password").type("Nitin@#123")
        cy.get("#password-confirmation").type("Nitin@#123")
        cy.get("button[title='Create an Account'] span").click()
    })
})