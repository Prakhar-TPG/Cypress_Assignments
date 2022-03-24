/// <reference types="cypress" />
context("My First Cypress Test", function () {

  beforeEach(function () {
    cy.fixture('user.json').then(function (data) {
      this.data = data

    })


    cy.fixture('locators.json').then(function (locator) {
      this.locator = locator
    })

  })


  it("Visits the Sauce Demo Page and check the menu items....", function () {

    cy.visit('https://www.saucedemo.com/');
    cy.url().should('include', 'sauce')

  })

  it('finds the Login link in the header', function () {


    let i
    for (i = 0; i < this.data.length; i++) {

      cy.get("[data-test =username]").type(this.data[i].username);
      cy.get("[data-test =password]").type(this.data[i].password);
      cy.get("#login-button").click();
      cy.get("[class=bm-burger-button]").click();
      cy.get("#logout_sidebar_link").click();

    }
  })


  it('Add Product to cart', function () {

    cy.get("[data-test =username]").type(this.data[0].username);
    cy.get("[data-test =password]").type(this.data[0].password);
    cy.get("#login-button").click();

    cy.get("button[name=add-to-cart-sauce-labs-backpack]").click();
    cy.get('#item_4_title_link > div').should('contain', "Sauce Labs Backpack")
    cy.log('Product Matched')
    cy.get('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div').should('contain', "$29.99")
    cy.log('Price Matched')

    cy.get("[class=shopping_cart_link]").click();
    cy.get('[class="inventory_item_name"]').should('contain', "Sauce Labs Backpack")
    cy.get('[class="inventory_item_price"]').should('contain', "$29.99")

  })

  it('Filter and remove from cart', function () {

    cy.visit('https://www.saucedemo.com/');

    cy.get("[data-test =username]").type(this.data[0].username);
    cy.get("[data-test =password]").type(this.data[0].password);
    cy.get("#login-button").click();

    cy.get("[data-test =product_sort_container]").select('lohi');
    cy.get('select').should('have.value', 'lohi')
    cy.get("[data-test =add-to-cart-sauce-labs-onesie]").click();
    cy.get("[class=shopping_cart_link]").click();

    cy.get("#remove-sauce-labs-onesie").click();
    // cy.get("[class='shopping_cart_badge']").should('not.have.value')


  })





})

