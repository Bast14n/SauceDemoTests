import ProductsPage from "../pageObjectModel/productsPage";
import BasketPage from "../pageObjectModel/basketPage";

const productsPage = new ProductsPage();
const basketPage = new BasketPage();

const checkoutTitleContainer = 'Checkout: Your Information';
const firstName = 'FName';
const lastName = 'LName';

describe('Performing checkout form tests', () => {
    beforeEach(() => {
        cy.loginToApp();
    })

    afterEach(() => {
        cy.restartAppState();
    })

    it('#1 When try to go to checkout form without adding any product #Then checkout button should be disabled', () => {
        productsPage.goToBasket();
        basketPage.buttonCheckout().should('be.disabled');
        basketPage.titleContainer().should('have.text', 'Your Cart');
    })

    it('#2 When user dont passes any data to form #Then going to next step should be blocked and proper error message should be displayed', () => {
        productsPage.buttonAddTShirt().click();
        productsPage.goToBasket();

        basketPage.goToCheckout();
        basketPage.goToOverview();
        basketPage.errorContainer().should('have.text', 'Error: First Name is required');
        basketPage.titleContainer().should('have.text', checkoutTitleContainer);
    })

    it('#3 When user passes only first name to form #Then going to next step should be blocked and proper error message should be displayed', () => {
        productsPage.buttonAddTShirt().click();
        productsPage.goToBasket();
        basketPage.goToCheckout();

        basketPage.inputFirstName().type(firstName);
        basketPage.goToOverview();
        basketPage.errorContainer().should('have.text', 'Error: Last Name is required');
        basketPage.titleContainer().should('have.text', checkoutTitleContainer);
    })

    it('#4 When user passes only first name and last name to form #Then going to next step should be blocked and proper message should be displayed', () => {
        productsPage.buttonAddTShirt().click();
        productsPage.goToBasket();
        basketPage.goToCheckout();

        basketPage.inputFirstName().type(firstName);
        basketPage.inputLastName().type(lastName);
        basketPage.goToOverview();
        basketPage.errorContainer().should('have.text', 'Error: Postal Code is required');
        basketPage.titleContainer().should('have.text', checkoutTitleContainer);
    })

    it('#5 When user passes all data to form but zip code contains letters #Then going to the next step should be blocked and proper message should be displayed', () => {
        productsPage.buttonAddTShirt().click();
        productsPage.goToBasket();
        basketPage.goToCheckout();

        basketPage.inputFirstName().type(firstName);
        basketPage.inputLastName().type(lastName);
        basketPage.inputPostalCode().type('123abc')
        basketPage.goToOverview();
        basketPage.errorContainer().should('have.text', 'Error: Postal Code is invalid');
        basketPage.titleContainer().should('have.text', checkoutTitleContainer);
    })

    it('#6 When user passes all data to form with proper format #Then going to next step should be enabled', () => {
        productsPage.buttonAddTShirt().click();
        productsPage.goToBasket();
        basketPage.goToCheckout();

        basketPage.inputFirstName().type(firstName);
        basketPage.inputLastName().type(lastName);
        basketPage.inputPostalCode().type('12-264')
        basketPage.goToOverview();
        basketPage.titleContainer().should('have.text', 'Checkout: Overview');
    })
})