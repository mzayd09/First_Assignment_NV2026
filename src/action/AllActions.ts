import { Page, expect } from "@playwright/test";
import { LoginAction } from "./LoginAction";
import { DashboardAction } from "./DashboardAction";

export class AllActions {
    readonly loginAction: LoginAction;
    readonly dashboardAction: DashboardAction;
    constructor(page: Page) {
        this.loginAction = new LoginAction(page);
        this.dashboardAction = new DashboardAction(page);

    }
}