export class LoginPage {

    inputUsername() {
        return cy.get('#user-name');
    }

    inputPassword() {
        return cy.get('#password');
    }

    buttonLogin() {
        return cy.get('#login-button');
    }

    errorMessageContainer() {
        return cy.get('.error-message-container');
    }
}

export default LoginPage;