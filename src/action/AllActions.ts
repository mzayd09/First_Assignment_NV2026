import { Page, expect } from "@playwright/test";
import { LoginAction } from "./LoginAction";
import { DashboardAction } from "./DashboardActions";

export class AllActions {
    readonly loginAction: LoginAction;
    readonly dashboardActions: DashboardAction;  
    private page: Page;
    constructor(page: Page) {
        this.loginAction = new LoginAction(page);
        this.dashboardActions = new DashboardAction(page);
        this.page = page;   
    }
}