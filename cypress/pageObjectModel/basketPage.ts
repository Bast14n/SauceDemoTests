import CommonPage from "./commonPage";

class BasketPage extends CommonPage {

    goToCheckout() {
        this.buttonCheckout().click();
    }

    goToOverview() {
        return cy.get('#continue').click();
    }

    goBackToProducts() {
        return cy.get('#back-to-products').click();
    }

    inputFirstName() {
        return cy.get('#first-name');
    }

    inputLastName() {
        return cy.get('#last-name');
    }

    inputPostalCode() {
        return cy.get('#postal-code');
    }

    labelItemTotal() {
        return cy.get('.summary_subtotal_label');
    }

    buttonFinish() {
        return cy.get('#finish');
    }

    buttonCheckout() {
        return cy.get('#checkout');
    }

    errorContainer() {
        return cy.get('.error-message-container');
    }

    titleContainer() {
        return cy.get('.header_secondary_container');
    }

    fillForm(firstName: string, secondName: string, postalCode: string) {
        this.inputFirstName().type(firstName);
        this.inputLastName().type(secondName);
        this.inputPostalCode().type(postalCode);
    }

}

export default BasketPage;