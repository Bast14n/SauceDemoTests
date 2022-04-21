import CommonPage from "./commonPage";

class BasketPage extends CommonPage {

    goToCheckout() {
        return cy.get('#checkout').click();
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

    inputSecondName() {
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

    fillForm(firstName: string, secondName: string, postalCode: string) {
        this.inputFirstName().type(firstName);
        this.inputSecondName().type(secondName);
        this.inputPostalCode().type(postalCode);
    }

}

export default BasketPage;