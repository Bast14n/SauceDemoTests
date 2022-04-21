import ProductsPage from "../pageObjectModel/productsPage";

const productsPage = new ProductsPage();

describe('Tests different types of sorting in products page', () => {
    before(() => {
        cy.visit('/');
        cy.loginToApp();
    })

    it('#1 When user set sorting by name (A to Z) #Then products should be sorted by name (A to Z)', () => {
        productsPage.filterProducts().select('az');
        productsPage.productsNames().then((products) => {
            const innerText = (el) => el.innerText
            const names = Cypress._.map(products, (name) => {
                innerText(name);
            })
            const sorted = Cypress._.sortBy(names);
            expect(sorted).to.deep.equal(names)
        });

    })

    it('#2 When user set sorting by name (Z to A) #Then products should be sorted by name (Z to A)', () => {
        productsPage.filterProducts().select('za');
        productsPage.productsNames().then((products) => {

            const names = Cypress._.map(Cypress.$.makeArray(products), 'innerText')
            const sorted = Cypress._.sortBy(names);

            sorted.reverse();
            expect(sorted).to.deep.equal(names)
        });
    })

    it('#3 When user set sorting by price (low to high) #Then products should be sorted by price (low to high)', () => {
        productsPage.filterProducts().select('lohi');
        productsPage.productPrices().then((productPrices) => {

            const prices = Cypress._.map(Cypress.$.makeArray(productPrices), 'innerText')
            const convertedPrices = [];
            prices.forEach(p => {
                convertedPrices.push(parseFloat(p.substring(1)));
            })

            const sorted = Cypress._.sortBy(convertedPrices);

            expect(sorted).to.deep.equal(convertedPrices)
        });

    })

    it('#4 When user set sorting by price (high to low) #Then products should be sorted by price (high to low)', () => {
        productsPage.filterProducts().select('hilo');
        productsPage.productPrices().then((productPrices) => {

            const prices = Cypress._.map(Cypress.$.makeArray(productPrices), 'innerText')
            const convertedPrices = [];
            prices.forEach(p => {
                convertedPrices.push(parseFloat(p.substring(1)));
            })

            const sorted = Cypress._.sortBy(convertedPrices);

            sorted.reverse();
            expect(sorted).to.deep.equal(convertedPrices)
        });

    })
})
