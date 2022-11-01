import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require('../pages/login')

Given("A user opens a saucelabs website", function () {
    cy.visit('/');
});

When("A user enters the username {string}", function (username) {
    loginPage.elements.usernameInput().type(username)

});

When("A user enters the password {string}", function (password) {
    loginPage.elements.passwordInput().type(password)

});

When("A user clicks on the login button", function () {
    loginPage.elements.loginBtn().click()

});

When("A user order by {string}", function (order) {
    loginPage.elements.orderBtn().select(order)

});

Then("A user order by {string}", function (order) {
    loginPage.elements.orderBtn().select(order)

});