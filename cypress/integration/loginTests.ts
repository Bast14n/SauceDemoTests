import LoginPage from "../pageObjectModel/loginPage";
import ProductsPage from "../pageObjectModel/productsPage";
import * as loginData from "../fixtures/LoginPage/loginData.json"

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

describe('Perform tests on login page', () => {
    before(() => {
        cy.visit('/');
    })

    it('#1 When user log in to app with proper credentials #Then next page should be visible', () => {
        loginPage.inputUsername().type(loginData[0].Login);
        loginPage.inputPassword().type(loginData[0].Password);
        loginPage.buttonLogin().click();
        productsPage.title().should('contain', 'Products');
        productsPage.burgerWraper().click();
        productsPage.linkLogut().click();
    })

    it('#2 When user log in to app with locked out user #Then proper error message should be displayed', () => {
        loginPage.inputUsername().type(loginData[1].Login);
        loginPage.inputPassword().type(loginData[1].Password);
        loginPage.buttonLogin().click();
        loginPage.errorMessageContainer().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    })

    it('#3 When user log in to without login and password #Then proper error message should be displayed', () => {
        loginPage.inputUsername().clear().type(loginData[2].Login);
        loginPage.inputPassword().clear().type(loginData[2].Password);
        loginPage.buttonLogin().click();
        loginPage.errorMessageContainer().should('have.text', 'Login and/or password is/are empty');
    })

    it('#4 When user log in to app without password #Then proper error message should be displayed', () => {
        loginPage.inputUsername().clear().type(loginData[3].Login);
        loginPage.inputPassword().clear().type(loginData[3].Password);
        loginPage.buttonLogin().click();
        loginPage.errorMessageContainer().should('have.text', 'Login and/or password is/are empty');
    })

    it('#5 When user log in to app without username #Then proper error message should be displayed', () => {
        loginPage.inputUsername().clear().type(loginData[4].Login);
        loginPage.inputPassword().clear().type(loginData[4].Password);
        loginPage.buttonLogin().click();
        loginPage.errorMessageContainer().should('have.text', 'Login and/or password is/are empty');
    })

    it('#6 When dont pass credentials #Then proper error message should be displayed', () => {
        loginPage.inputUsername().clear().type(loginData[5].Login);
        loginPage.inputPassword().clear().type(loginData[5].Password);
        loginPage.buttonLogin().click();
        loginPage.errorMessageContainer().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    })
})