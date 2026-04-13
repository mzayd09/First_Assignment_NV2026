import {Page, Locator} from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly AddToCartButton: Locator;
    readonly RemoveFromCart: Locator;
    readonly CartBadge: Locator;
    readonly CartBadgeCount: Locator;


    constructor(page: Page) {
        this.page = page;
        this.AddToCartButton = page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]');
        this.RemoveFromCart = page.locator('//button[@id="remove-sauce-labs-backpack"]');
        this.CartBadge = page.locator('//*[@class = "shopping_cart_link"]');
        this.CartBadgeCount = page.locator('//*[@class = "shopping_cart_link"]//span');
    }
}