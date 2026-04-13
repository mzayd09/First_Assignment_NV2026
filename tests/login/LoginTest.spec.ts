//import {test, expect} from "@playwright/test";//
import {test, expect} from "../../src/fixture/fixture";

//import { LoginAction } from "../../src/action/LoginAction.ts";
import loginData from "../../src/testdata/Logintestdata.json";


test.beforeEach(async ({page}) => {
    await page.goto(loginData.baseUrl);
});


test('TC-01: Validate user should login successfully', async ({Helper, page}) =>{
//const loginAction = new LoginAction(page);
await Helper.AllActions.loginAction.login(loginData.ValidUser.username, loginData.ValidUser.password);
await expect(page).toHaveTitle(loginData.PageTitle);
await expect(page).toHaveURL(loginData.DashboardUrl);
});

test('TC-02: Locked out user should not login', async ({Helper}) =>{
//const loginAction = new LoginAction(page);
const errormsg = await Helper.AllActions.loginAction.getErrorMessage();
await Helper.AllActions.loginAction.login(loginData.lockedUser.username, loginData.lockedUser.password);
await expect(errormsg).toHaveText(loginData.lockedUser.errorMessage);   
});

test('TC-03: invalid user should not login', async ({Helper}) =>{
//const loginAction = new LoginAction(page);
const errormsg = await Helper.AllActions.loginAction.getErrorMessage();
await Helper.AllActions.loginAction.login(loginData.invalidUser.username, loginData.invalidUser.password);
await expect(errormsg).toHaveText(loginData.invalidUser.errorMessage);   
});