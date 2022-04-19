class ProductsPage {

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

    productsNames() {
        return cy.get('.inventory_item_name');
    }

    productPrices() {
        return cy.get('.inventory_item_price');
    }
}

export default ProductsPage;