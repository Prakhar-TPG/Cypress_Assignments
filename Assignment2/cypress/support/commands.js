Cypress.Commands.add('Signin_button', (sign_in) => {    
    cy.get(sign_in).click()                   
})

Cypress.Commands.add('register_button', (create_acc_btn) => {
    cy.get(create_acc_btn).click()                
})

Cypress.Commands.add('login', (loginid,password,submit_login_btn ) => {  
    cy.get(loginid).type("6ke72@stwyscn.com"),                 
    cy.get(password).type("qwerty"),                        
    cy.get(submit_login_btn).click();                               
    cy.log("You are logged in") 
})

Cypress.Commands.add('urlpage', () => {
    cy.visit('https://automationpractice.com/index.php');
    cy.url().should('include','automation')
})

Cypress.Commands.add('btn', (radio_btn) => {  
    cy.wait(2000)
    cy.get(radio_btn).check()
})

Cypress.Commands.add('information', (form, formdata) => {
    cy.get(form).type(formdata) 
})

Cypress.Commands.add('drop', (dropdown,dropdown_text) => {    
    cy.get(dropdown).select(dropdown_text)
    cy.get("#submitAccount").click();                                  
})

Cypress.Commands.add('verifyItem', (homepage,homepage_data) => {   
    cy.get(homepage).should('have.text',homepage_data)
})

Cypress.Commands.add('clk', (women,Tshirts,add_to_cart) => {
    cy.get(women).invoke('show')            
    cy.get(Tshirts).click({ force: true }); 
    cy.get(add_to_cart).click()             
})

Cypress.Commands.add('Product', (verifications,verifications_text) => {    
    cy.get(verifications).invoke('text')
    .should((text1) => {
    expect(text1).contains(verifications_text)
    })    
})