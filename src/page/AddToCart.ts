import {Page, Locator} from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly AddToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.AddToCartButton = page.locator('#add-to-cart-button');
    }
}