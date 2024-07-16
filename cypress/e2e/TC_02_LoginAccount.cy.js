
describe('Create Account Suite',()=>{

    it('Create Account Test',()=>{

        cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")

        cy.get("#email").type("Nitinraut289@gmail.com")
        cy.get("body > div:nth-child(5) > main:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > fieldset:nth-child(2) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)").type("Nitin@#123")
        cy.get("fieldset[class='fieldset login'] div[class='primary'] span").click()
    })
})