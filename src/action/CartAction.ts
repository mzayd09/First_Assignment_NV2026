import { Page } from "@playwright/test";
import { CartPage } from "../../src/page/AddToCart";

//creating login action class to perform actions on login page//

export class CartAction {
 
    //taking instance of login page class to use its locators in this class//
   
    readonly AddToCart: CartPage;
    constructor(page: Page) {
        this.AddToCart = new CartPage(page);

    }
    // sequential actions to perform login
    async AddToCartAction () {
        await this.AddToCart.AddToCartButton.click();
    }

    // async getErrorMessage() {
    //     return this.Dashboard.errorMessage;
    // }
}