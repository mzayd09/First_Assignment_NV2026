import {Page, Locator} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator; 
    readonly errorMessage: Locator;
    
    constructor(page: Page) {
        this.page = page;

        // this contains all the locators fo the login page which will be used in action class to perform actions on login page//
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator('//*[@class="error-message-container error"]/h3');
    }
} 