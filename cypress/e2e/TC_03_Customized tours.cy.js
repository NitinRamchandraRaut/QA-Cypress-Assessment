



describe('Customized tours Suite',()=>{

    it('Customized tours Test',()=>{

        

       // 1. https://nichethyself.com/tourism/home.html

       cy.visit("https://nichethyself.com/tourism/home.html")


//2.Go to "Customized tours"

cy.get("a[href='customised.html']").click()


//3. Select "Home Stay" in preferred stay dropwdown/combo.

cy.visit("https://nichethyself.com/tourism/customised.html")

cy.get("#days").select('Home Stay')

//4. Click on England checkbox


cy.get("div.checkbox-inline:nth-child(34) > label:nth-child(1) > input").check().should('be.checked')

//5. From above now click on "Contact Us" menu on top right corner
cy.get(".link").click()

//6. On "Contact Us" window, click on Search icon.
//7. Enter "London" on the pop window and click on OK.
cy.visit("https://nichethyself.com/tourism/contact.html")

cy.window().then((win)=>{
    cy.stub(win,'prompt').returns('London');
})
cy.get(".glyphicon.glyphicon-search").click();

cy.get('#locationd').should('have.text','Enter valid location');


//8. Close "Contact Us" window and click on "Submit" button on customized tour
cy.visit("https://nichethyself.com/tourism/customised.html?name=&email=&members=&days=")
cy.get("form[name='internationalf'] button[type='submit']").click();

    })
})