class CommonPage {

    productsNames() {
        return cy.get('.inventory_item_name');
    }

    productPrices() {
        return cy.get('.inventory_item_price');
    }

    buttonRemoveBackpack() {
        return cy.get('#remove-sauce-labs-backpack');
    }

    buttonRemoveBikeLight() {
        return cy.get('#remove-sauce-labs-bike-light');
    }

    buttonRemoveTShirt() {
        return cy.get('#remove-sauce-labs-bolt-t-shirt');
    }

    buttonRemoveJacket() {
        return cy.get('#remove-sauce-labs-fleece-jacket');
    }

    buttonRemoveOnsie() {
        return cy.get('#remove-sauce-labs-onesie');
    }

    buttonRemoveAllTheThings() {
        return cy.get('#remove-test.allthethings()-t-shirt-(red)');
    }
}

export default CommonPage;