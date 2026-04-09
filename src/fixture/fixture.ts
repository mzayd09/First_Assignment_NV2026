import {test as base} from '@playwright/test';
import { LoginAction } from '../action/LoginAction';

// creating a fixture to use login action class in test files//
type NewFixture = {
    // creating a login action object to use in test files//
    loginAction: LoginAction;
};
export const test = base.extend<NewFixture>({

    loginAction: async ({ page }, use) => {
        const loginAction = new LoginAction(page);
        await use(loginAction);
    }
});

export { expect } from '@playwright/test';