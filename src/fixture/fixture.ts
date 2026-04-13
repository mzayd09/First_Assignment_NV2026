import {test as base} from '@playwright/test';
//import { LoginAction } from '../action/LoginAction'; -- This is not required since all action classes, including LoginAction, are already imported and accessible//    
//import { LoginPage } from '../page/LoginPage';  -- This is not required since all action classes, including LoginPage, are already imported and accessible//
import { AllActions } from '../action/AllActions';

// creating a fixture to use login action class in test files//
type NewFixture = {
    // creating a login action object to use in test files//
    AllActions: AllActions;
};
export const test = base.extend<NewFixture>({

    AllActions: async ({ page, }, use) => {
        const allActions = new AllActions(page);
        await use(allActions);
    }
});

export { expect } from '@playwright/test';