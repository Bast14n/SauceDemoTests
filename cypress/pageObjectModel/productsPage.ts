import CommonPage from "./commonPage";

class ProductsPage extends CommonPage {

    title() {
        return cy.get('.header_secondary_container > .title');
    }

    burgerWraper() {
        return cy.get('#react-burger-menu-btn');
    }

    linkLogut() {
        return cy.get('#logout_sidebar_link');
    }

    filterProducts() {
        return cy.get('.product_sort_container');
    }

    goToBasket() {
        return cy.get('.shopping_cart_link').click();
    }

    iconBasketItemQuantity() {
        return cy.get('.shopping_cart_badge');
    }

    buttonAddBackpack() {
        return cy.get('#add-to-cart-sauce-labs-backpack');
    }

    buttonAddBikeLight() {
        return cy.get('#add-to-cart-sauce-labs-bike-light');
    }

    buttonAddTShirt() {
        return cy.get('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    buttonAddJacket() {
        return cy.get('#add-to-cart-sauce-labs-fleece-jacket');
    }

    buttonAddOnsie() {
        return cy.get('#add-to-cart-sauce-labs-onesie');
    }

    buttonAddAllTheThings() {
        return cy.get('#add-to-cart-test.allthethings()-t-shirt-(red)');
    }
}

export default ProductsPage;