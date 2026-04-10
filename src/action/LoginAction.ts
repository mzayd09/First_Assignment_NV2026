import { Page } from "@playwright/test";

//importing login page class to use its locators in this class//

import { LoginPage } from "../page/LoginPage";


//creating login action class to perform actions on login page//

export class LoginAction {
 
    //taking instance of login page class to use its locators in this class//
   
    readonly loginPage: LoginPage;
    constructor(page: Page) {
        this.loginPage = new LoginPage(page);

    }
    // sequential actions to perform login
    async login(username: string, password: string) {
        await this.loginPage.usernameInput.fill(username);
        await this.loginPage.passwordInput.fill(password);
        await this.loginPage.loginButton.click();
    }

    async getErrorMessage() {
        return this.loginPage.errorMessage;
    }
}