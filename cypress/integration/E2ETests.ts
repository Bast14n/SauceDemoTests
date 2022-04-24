import ProductsPage from "../pageObjectModel/productsPage";
import BasketPage from "../pageObjectModel/basketPage";
import * as products from "../fixtures/Products/products"

const productsPage = new ProductsPage();
const basketPage = new BasketPage();

const firstName = 'firstName';
const lastName = 'lastName';
const postalCode = '11-11';



describe('Performing E2E tests in app', () => {
    before(() => {
        cy.visit('/');
    })

    beforeEach(() => {
        cy.loginToApp();
    })

    afterEach(() => {
        cy.restartAppState();
    })

    it('#1 When user add backpack and go to checkout #Then backpack should be present in basket list and correct amount should be displayed', () => {
        productsPage.buttonAddBackpack().click();
        productsPage.iconBasketItemQuantity().should('have.text', '1');
        productsPage.goToBasket();

        basketPage.productsNames().contains(products.backpackName).should('exist');
        basketPage.productPrices().contains(products.backpackPrice).should('exist');
        basketPage.goToCheckout();

        basketPage.fillForm(firstName, lastName, postalCode);
        basketPage.goToOverview();

        basketPage.productsNames().contains(products.backpackName).should('exist');
        basketPage.productPrices().contains(products.backpackPrice).should('exist');

        basketPage.labelItemTotal().should('contain', products.backpackPrice);
        basketPage.buttonFinish().click();

        basketPage.goBackToProducts();
    })

    it('#2 When user add bike light and thirt #Then both products should be present in basket list and correct amount should be displayed', () => {
        productsPage.buttonAddBikeLight().click();
        productsPage.buttonAddTShirt().click();
        productsPage.iconBasketItemQuantity().should('have.text', '2');
        productsPage.goToBasket();

        basketPage.productsNames().contains(products.bikeLightName).should('exist');
        basketPage.productsNames().contains(products.tShirtName).should('exist');
        basketPage.productPrices().contains(products.bikeLightPrice).should('exist');
        basketPage.productPrices().contains(products.tShirtPrice).should('exist');
        basketPage.goToCheckout();

        basketPage.fillForm(firstName, lastName, postalCode);
        basketPage.goToOverview();

        productsPage.productsNames().contains(products.bikeLightName).should('exist');
        productsPage.productsNames().contains(products.tShirtName).should('exist');
        basketPage.productPrices().contains(products.bikeLightPrice).should('exist');
        basketPage.productPrices().contains(products.tShirtPrice).should('exist');

        basketPage.labelItemTotal().should('contain', products.bikeLightPrice + products.tShirtPrice);
        basketPage.buttonFinish().click();

        basketPage.goBackToProducts();
    })

    it('#3 When user add jacket and onsie then remove jacket from product list #Then only onsie should be present in basket list and correct amount should be displayed', () => {
        productsPage.buttonAddJacket().click();
        productsPage.buttonAddOnsie().click();
        productsPage.buttonRemoveJacket().click();
        productsPage.iconBasketItemQuantity().should('have.text', '1');
        productsPage.goToBasket();

        basketPage.productsNames().contains(products.jacketName).should('not.exist');
        basketPage.productsNames().contains(products.onsieName).should('exist');
        basketPage.productPrices().contains(products.jacketPrice).should('not.exist');
        basketPage.productPrices().contains(products.onsiePrice).should('exist');
        basketPage.goToCheckout();

        basketPage.fillForm(firstName, lastName, postalCode);
        basketPage.goToOverview();

        productsPage.productsNames().contains(products.jacketName).should('not.exist');
        productsPage.productsNames().contains(products.onsieName).should('exist');
        basketPage.productPrices().contains(products.jacketPrice).should('not.exist');
        basketPage.productPrices().contains(products.onsiePrice).should('exist');

        basketPage.labelItemTotal().should('contain', products.onsiePrice);
        basketPage.buttonFinish().click();

        basketPage.goBackToProducts();
    })

    it('#4 When user add backpack, bike light and tshirt then remove backpack and bike light from product list #Then only tshirt should be present in basket list and correct amount should be displayed', () => {
        productsPage.buttonAddBackpack().click();
        productsPage.buttonAddBikeLight().click();
        productsPage.buttonAddTShirt().click();
        productsPage.buttonRemoveBackpack().click();
        productsPage.buttonRemoveBikeLight().click();
        productsPage.iconBasketItemQuantity().should('have.text', '1');
        productsPage.goToBasket();

        basketPage.productsNames().contains(products.backpackName).should('not.exist');
        basketPage.productsNames().contains(products.bikeLightName).should('not.exist');
        basketPage.productsNames().contains(products.tShirtName).should('exist');
        basketPage.productPrices().contains(products.backpackPrice).should('not.exist');
        basketPage.productPrices().contains(products.bikeLightPrice).should('not.exist');
        basketPage.productPrices().contains(products.tShirtPrice).should('exist');
        basketPage.goToCheckout();

        basketPage.fillForm(firstName, lastName, postalCode);
        basketPage.goToOverview();

        basketPage.productsNames().contains(products.backpackName).should('not.exist');
        basketPage.productsNames().contains(products.bikeLightName).should('not.exist');
        basketPage.productsNames().contains(products.tShirtName).should('exist');
        basketPage.productPrices().contains(products.backpackPrice).should('not.exist');
        basketPage.productPrices().contains(products.bikeLightPrice).should('not.exist');
        basketPage.productPrices().contains(products.tShirtPrice).should('exist');

        basketPage.labelItemTotal().should('contain', products.tShirtPrice);
        basketPage.buttonFinish().click();

        basketPage.goBackToProducts();
    })

    it('#5 When user add thirt and onsie, then remove test onsie from basket view #Then only tshirt should be present in overview view and correct amount should be displayed', () => {
        productsPage.buttonAddTShirt().click();
        productsPage.buttonAddOnsie().click();
        productsPage.iconBasketItemQuantity().should('have.text', '2');
        productsPage.goToBasket();

        basketPage.productsNames().contains(products.tShirtName).should('exist');
        basketPage.productsNames().contains(products.onsieName).should('exist');
        basketPage.productPrices().contains(products.tShirtPrice).should('exist');
        basketPage.productPrices().contains(products.onsiePrice).should('exist');

        basketPage.buttonRemoveOnsie().click();
        basketPage.productsNames().contains(products.tShirtName).should('exist');
        basketPage.productsNames().contains(products.onsieName).should('not.exist');
        basketPage.productPrices().contains(products.tShirtPrice).should('exist');
        basketPage.productPrices().contains(products.onsiePrice).should('not.exist');
        basketPage.goToCheckout();

        basketPage.fillForm(firstName, lastName, postalCode);
        basketPage.goToOverview();

        basketPage.productsNames().contains(products.tShirtName).should('exist');
        basketPage.productsNames().contains(products.onsieName).should('not.exist');
        basketPage.productPrices().contains(products.tShirtPrice).should('exist');
        basketPage.productPrices().contains(products.onsiePrice).should('not.exist');

        basketPage.labelItemTotal().should('contain', products.tShirtPrice);
        basketPage.buttonFinish().click();

        basketPage.goBackToProducts();
    })

    it('#6 When user add backpack, bike light and test tshirt, then remove backpack and bike light from basket view, #Then only test tshirt should be present in overview view and correct amount should be displayed', () => {
        productsPage.buttonAddBackpack().click();
        productsPage.buttonAddBikeLight().click();
        productsPage.buttonAddAllTheThings().click();
        productsPage.iconBasketItemQuantity().should('have.text', '3');
        productsPage.goToBasket();

        basketPage.productsNames().contains(products.backpackName).should('exist');
        basketPage.productsNames().contains(products.bikeLightName).should('exist');
        basketPage.productsNames().contains(products.allTheThingsName).should('exist')
        basketPage.productPrices().contains(products.backpackPrice).should('exist');
        basketPage.productPrices().contains(products.bikeLightPrice).should('exist');
        basketPage.productPrices().contains(products.allTheThingsPrice).should('exist');

        basketPage.buttonRemoveBackpack().click();
        basketPage.buttonRemoveBikeLight().click();
        basketPage.productsNames().contains(products.backpackName).should('not.exist');
        basketPage.productsNames().contains(products.bikeLightName).should('not.exist');
        basketPage.productsNames().contains(products.allTheThingsName).should('exist')
        basketPage.productPrices().contains(products.backpackPrice).should('not.exist');
        basketPage.productPrices().contains(products.bikeLightPrice).should('not.exist');
        basketPage.productPrices().contains(products.allTheThingsPrice).should('exist');
        basketPage.goToCheckout();

        basketPage.fillForm(firstName, lastName, postalCode);
        basketPage.goToOverview();

        basketPage.productsNames().contains(products.backpackName).should('not.exist');
        basketPage.productsNames().contains(products.bikeLightName).should('not.exist');
        basketPage.productsNames().contains(products.allTheThingsName).should('exist')
        basketPage.productPrices().contains(products.backpackPrice).should('not.exist');
        basketPage.productPrices().contains(products.bikeLightPrice).should('not.exist');
        basketPage.productPrices().contains(products.allTheThingsPrice).should('exist');

        basketPage.labelItemTotal().should('contain', products.allTheThingsPrice);
        basketPage.buttonFinish().click();

        basketPage.goBackToProducts();
    })
})