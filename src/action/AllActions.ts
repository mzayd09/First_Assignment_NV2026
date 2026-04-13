import { Page, expect } from "@playwright/test";
import { LoginAction } from "./LoginAction";
import { DashboardAction } from "./DashboardActions";
import { CartAction } from "./CartAction";

export class AllActions {
    readonly loginAction: LoginAction;
    readonly dashboardActions: DashboardAction; 
    readonly cartAction: CartAction; 
    private page: Page;
    constructor(page: Page) {
        this.loginAction = new LoginAction(page);
        this.dashboardActions = new DashboardAction(page);
        this.cartAction = new CartAction(page);
        this.page = page;   
    }
}