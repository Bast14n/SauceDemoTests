import ProductsPage from "../pageObjectModel/productsPage";
import BasketPage from "../pageObjectModel/basketPage";

const productsPage = new ProductsPage();
const basketPage = new BasketPage();

const firstName = 'firstName';
const lastName = 'lastName';
const postalCode = '11-11';

const backpackName = 'Sauce Labs Backpack';
const backpackPrice = 29.99;

// const bikeLightName 
// const bikeLightPrice

// const tShirtName 
// const tShirtPrice

// const jacketName 
// const jacketPrice

// const onsieName 
// const onsiePrice

// const allTheThingsName
// const allTheThingsPrice


describe('Performing E2E tests in app', () => {
    before(() => {
        cy.visit('/');
        cy.loginToApp();
    })

    afterEach(() => {
        cy.restartAppState();
    })

    it('#1 When user add backpack and go to checkout #Then backpack should be present in basket list and correct ammout should be displayed', () => {
        productsPage.buttonAddBackpack().click();
        productsPage.iconBasketItemQuantity().should('have.text', '1');
        productsPage.goToBasket();

        basketPage.productsNames().contains(backpackName).should('exist');
        basketPage.productPrices().contains(backpackPrice).should('exist');
        basketPage.goToCheckout();

        basketPage.fillForm(firstName, lastName, postalCode);
        basketPage.goToOverview();

        basketPage.productsNames().contains(backpackName).should('exist');
        basketPage.productPrices().contains(backpackPrice).should('exist');

        basketPage.labelItemTotal().should('contain', backpackPrice);
        basketPage.buttonFinish().click();

        basketPage.goBackToProducts();
    })
})