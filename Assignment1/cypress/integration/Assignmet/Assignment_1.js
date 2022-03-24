/// <reference types="cypress" />
describe("My First Cypress Test", function () {

    beforeEach(function () {
        cy.fixture('user.json').then(function (data) {
            this.data = data
        })
        cy.fixture('locators.json').then(function (locator) {
            this.locator = locator
        })
        cy.urlpage();
    })

    it('Login credentials using loop', function () {

    let i;
    for (i = 0; i < this.data.length; i++) {
        cy.loginPage(this.locator.user,this.locator.pass,this.data[i].username, this.data[i].password, this.locator.login_btn)
        cy.logout(this.locator.hamburger, this.locator.logout_btn)
        }
    })

    it('Add to cart and verify', function () {
        cy.loginPage(this.locator.user,this.locator.pass,this.data[0].username, this.data[0].password, this.locator.login_btn)
        cy.verifyItem(this.locator.add_to_cart, this.locator.cart, this.locator.item1, this.locator.name1, this.locator.price1, this.locator.cost1)
    })

    it('Filter and remove from cart', function () {
        cy.loginPage(this.locator.user,this.locator.pass,this.data[0].username, this.data[0].password, this.locator.login_btn)
        cy.FilterAndRemove(this.locator.low_price_add_to_cart, this.locator.cart, this.locator.filter, this.locator.item2, this.locator.name2, this.locator.price2, this.locator.cost2, this.locator.remove_btn, this.locator.item_removed_check)
    })
})

