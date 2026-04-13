import { AllActions } from "../../src/action/AllActions";
import {test, expect} from "../../src/fixture/fixture";
import loginData from "../../src/testdata/Logintestdata.json";


test.beforeEach(async ({page}) => {
    await page.goto(loginData.baseUrl);
});

test('TC-07: user should able to add Product to Cart', async ({AllActions}) => {
    await AllActions.loginAction.login(loginData.ValidUser.username, loginData.ValidUser.password);
    await AllActions.cartAction.AddToCartAction();
    await expect(AllActions.cartAction.AddToCart.CartBadgeCount).toHaveText(loginData.CartItemCount.toString());

});


test('TC-08: user should able to remove Product from Cart', async ({AllActions}) => {
    await AllActions.loginAction.login(loginData.ValidUser.username, loginData.ValidUser.password);
    await AllActions.cartAction.AddToCartAction();
    await expect(AllActions.cartAction.AddToCart.CartBadgeCount).toHaveText(loginData.CartItemCount.toString());
    await AllActions.cartAction.AddToCart.RemoveFromCart.click();
    await expect(AllActions.cartAction.AddToCart.CartBadgeCount).not.toBeVisible();  

});
