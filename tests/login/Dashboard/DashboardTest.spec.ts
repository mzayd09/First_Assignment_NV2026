
import { expect, test } from "../../../src/fixture/fixture";
import loginData from "../../../src/testdata/Logintestdata.json";

test.beforeEach(async ({page}) => {
    await page.goto(loginData.baseUrl);
});

test('TC-04: Dashboard page should display correctly', async ({AllActions}) =>{
    await AllActions.loginAction.login(loginData.ValidUser.username, loginData.ValidUser.password);
    // await AllActions.dashboardAction.DashboardPageAction();
    await expect(AllActions.dashboardActions.Dashboard.DashboardPageTitle).toHaveText(loginData.DashboardPageTitle);
});

test('TC-05: Dashboard menu should open on clicking Open Menu button', async ({AllActions}) =>{
    await AllActions.loginAction.login(loginData.ValidUser.username, loginData.ValidUser.password);
    await AllActions.dashboardActions.DashboardPageAction();
    // Add assertions to verify that the menu opens correctly, e.g., check for the presence of menu items or a specific element that appears when the menu is open.
    await expect(AllActions.dashboardActions.Dashboard.OpenMenuButton).toBeVisible();
    await expect(AllActions.dashboardActions.Dashboard.MenuAllItems).toHaveText(loginData["All Menu Items"]);   
});