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
}

export default ProductsPage;