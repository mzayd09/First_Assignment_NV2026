import {Page, Locator} from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
   readonly DashboardPageTitle: Locator;
   readonly OpenMenuButton: Locator;
   readonly MenuAllItems: Locator;
   readonly MenuLogout: Locator;
   readonly PageTitle: Locator;
//    readonly MenuAbout: Locator;
//   
//    readonly MenuResetAppState: Locator;
//    readonly closeMenuButton: Locator;
    
    constructor(page: Page) {
        this.page = page;

        // this contains all the locators fo the login page which will be used in action class to perform actions on login page//
        // using GetByRole, Xpath locator to locate the page title of dashboard page//
       // this.DashboardPageTitle = page.locator('//div[@class="app_logo"]');
       this.DashboardPageTitle = page.getByText('Swag Labs');
        this.OpenMenuButton = page.getByRole('button', { name: 'Open Menu' });
        this.MenuAllItems = page.locator('.bm-item.menu-item'); 
        this.MenuLogout = page.locator('//*[@data-test="logout-sidebar-link"]');  
        this.PageTitle = page.getByText('Swag Labs');     
        // this.MenuAbout = page.locator('//*[@data-test="about-sidebar-link"]');
        // this.MenuLogout = page.locator('//*[@data-test="logout-sidebar-link"]');
        // this.MenuResetAppState = page.locator('//*[@data-test="reset-app-state-sidebar-link"]');
        // this.closeMenuButton = page.locator('//*[@id="react-burger-cross-btn"]');

    }
} 