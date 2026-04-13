import { Page } from "@playwright/test";

//importing login page class to use its locators in this class//

import { DashboardPage} from "../page/DashboardPage";


//creating login action class to perform actions on login page//

export class DashboardAction {
 
    //taking instance of login page class to use its locators in this class//
   
    readonly Dashboard: DashboardPage;
    constructor(page: Page) {
        this.Dashboard = new DashboardPage(page);

    }
    // sequential actions to perform login
    async DashboardPageAction () {
        await this.Dashboard.OpenMenuButton.click();
    }

    // async getErrorMessage() {
    //     return this.Dashboard.errorMessage;
    // }
}