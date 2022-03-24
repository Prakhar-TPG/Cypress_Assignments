Cypress.Commands.add('login', (loginid,password,submit_login_btn) => {
    cy.get(loginid).type("6ke72@stwyscn.com"),                 
    cy.get(password).type("qwerty"),                        
    cy.get(submit_login_btn).click();
})

Cypress.Commands.add('work', (Tshirts,add_to_cart,proceed)=> {
    cy.get(Tshirts).contains("T-shirts").click({force: true}),
    cy.get(add_to_cart).click();
    cy.wait(2000)
    cy.get(proceed).click();
})

Cypress.Commands.add('urlpage', () => {
    cy.visit('https://automationpractice.com/index.php');
    cy.url().should('include','automation')
})
Cypress.Commands.add('summary', (Locators,Value) => {
    cy.log(Value)
    cy.get(Locators).should('have.text', Value)
})

Cypress.Commands.add('check_out', (checkout) => {
    cy.get(checkout).click()  
})

Cypress.Commands.add('address', (address,addres_text) => {
    cy.get(address).invoke('text')
    .should((text1) => {
    expect(text1).contains(addres_text)
    }) 
})

Cypress.Commands.add('shipping', (vshipping,vshipping_text,tc) => {
    cy.get(vshipping).invoke('text')
    .should((text1) => {
    expect(text1).contains(vshipping_text)
    })
})

Cypress.Commands.add('payment', (vpayment,vpayment_text) => {
    cy.get(vpayment).invoke('text')
    .should((text1) => {
    expect(text1).contains(vpayment_text)
    })
})

Cypress.Commands.add('confirm', (checkpayment,checktext) => {
    cy.get(checkpayment).invoke('text')
    .should((text1) => {
    expect(text1).contains(checktext)
    })
})