import { Page, expect } from "@playwright/test";
import { LoginAction } from "./LoginAction";

export class AllActions {
    readonly loginAction: LoginAction;
    constructor(page: Page) {
        this.loginAction = new LoginAction(page);
    }
}