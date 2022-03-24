import './commands'

afterEach(() => {
    let str = [];
    cy.getCookies().then((cook) => {
        cy.log(cook);
        for (let l = 0; l < cook.length; l++) {
            str[l] = cook[l].name;
            Cypress.Cookies.preserveOnce(str[l]);
        }
    })
})
