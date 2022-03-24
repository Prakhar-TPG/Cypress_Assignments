Cypress.Commands.add('loginPage', (user, pass, username, password, login_btn) => {
    cy.get(user).type(username);
    cy.get(pass).type(password);
    cy.get(login_btn).click();
})

Cypress.Commands.add('urlpage', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.url().should('include', 'sauce')
})

Cypress.Commands.add('logout', (hamburger, logout_btn) => {
    cy.get(hamburger).click();
    cy.get(logout_btn).click();
})

Cypress.Commands.add('verifyItem', (add_to_cart, cart, item1, name1, price1, cost1) => {
    cy.get(add_to_cart).click();
    cy.get(cart).click();
    cy.get(item1).should('contain', name1)
    cy.log('Product Matched')
    cy.get(price1).should('contain', cost1)
    cy.log('Price Matched')
})

Cypress.Commands.add('FilterAndRemove', (low_price_add_to_cart, cart, filter, item2, name2, price2, cost2, remove_btn, item_removed_check) => {
    cy.get(filter).select('lohi')
    cy.get('select').should('have.value', 'lohi')
    cy.get(low_price_add_to_cart).click();
    cy.get(cart).click();
    cy.get(item2).should('contain', name2);
    cy.get(price2).should('contain', cost2);
    cy.get(remove_btn).click();
    cy.get(item_removed_check).should('not.exist');
})