/// <reference types="cypress" />
describe("My First Cypress Test", function () {

    beforeEach(function () {
        cy.fixture('signup.json').then(function (data) {
            this.data = data
        })
        cy.fixture('productpage.json').then(function (locator) {
            this.locator = locator
        })
        cy.fixture('my_account.json').then(function (user) {
            this.user = user
        })
})

    it('sign up and register', function () {
        cy.urlpage()
        let i = 0
        const result = Math.random().toString(36).substring(2, 7) + '@stwyscn.com';
        cy.Signin_button(this.data.sign_in),
        cy.get(this.data.new_email).type(result),
        cy.register_button(this.data.create_acc_btn)
        cy.btn(this.data.radio_btn)
        for (i = 0; i < this.data.form.length; i++) {
            cy.information(this.data.form[i], this.data.formdata[i])                            
        }
        cy.drop(this.data.dropdown, this.data.dropdown_text)
    })

    it('verify all items in homepage', function () {
        cy.urlpage();
        let i
        cy.Signin_button(this.data.sign_in),
        cy.login(this.data.loginid, this.data.password, this.data.submit_login_btn)
        for (i = 0; i < this.user.homepage.length; i++) {
        cy.verifyItem(this.user.homepage[i], this.user.homepage_data[i])                            
        }
    })

    it('verify all items in popup', function () {

        let i
        cy.clk(this.locator.women, this.locator.Tshirts, this.locator.add_to_cart)
        for (i = 0; i < this.locator.verifications.length; i++) {
            cy.Product(this.locator.verifications[i], this.locator.verifications_text[i])                          
        }
    })
})

