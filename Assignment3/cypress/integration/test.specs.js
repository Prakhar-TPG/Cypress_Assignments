/// <reference types="cypress" />
context("My First Cypress Test", function () {

  beforeEach(function () {
    cy.fixture('locators.json').then(function (data) {
      this.data = data
    })
    cy.fixture('summary.json').then(function (user) {
      this.user = user
    })
    cy.fixture('address.json').then(function (locality) {
      this.locality = locality
    })
    cy.fixture('shipping.json').then(function (ship) {
      this.ship = ship
    })
    cy.fixture('payment.json').then(function (pay) {
      this.pay = pay
    })
    cy.fixture('confirmation.json').then(function (final) {
      this.final = final
    })
  })
  
  it('Verify data of Summary page ', function () {
    cy.urlpage();

    let i = 0
    cy.get(this.data.sign_in).click(),
    cy.login(this.data.loginid, this.data.password, this.data.submit_login_btn)
    cy.work(this.data.Tshirts, this.data.add_to_cart, this.data.proceed)
    for (i = 0; i < this.user.Locators.length; i++) {
      cy.summary(this.user.Locators[i], this.user.Value[i])
    }
    cy.check_out(this.user.checkout)
  })

  it('Verify data of Address page ', function () {
    let i = 0
    for (i = 0; i < this.locality.address.length; i++) {
      cy.address(this.locality.address[i], this.locality.address_text[i])
    }
    cy.check_out(this.user.checkout)
  })

  it('Verify data of shipping page ', function () {

    let i = 0
    for (i = 0; i < this.ship.vshipping.length; i++) {
      cy.shipping(this.ship.vshipping[i], this.ship.vshipping_text[i])
    }
    cy.get(this.ship.tc).check()
    cy.check_out(this.user.checkout)
  })

  it('Verify data of payment page ', function () {
    let i = 0
    for (i = 0; i < this.pay.vpayment.length; i++) {
      cy.payment(this.pay.vpayment[i], this.pay.vpayment_text[i])
    }
    cy.get(this.pay.vpayment[3]).click()
  })

  it('Verify data of confirmation page ', function () {
    let i = 0
    for (i = 0; i < this.final.checkpayment.length; i++) {
      cy.confirm(this.final.checkpayment[i], this.final.checktext[i])
    }
    cy.check_out(this.user.checkout)
  })
})