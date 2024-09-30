import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productDetailsReducer from './slices/productDetails'
import myUsersReducer from './slices/myUsers';
import orderListReducer from './slices/orderList';

const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    whitelist: [],
};

const rootReducer = combineReducers({
    productDetails: productDetailsReducer,
    myUsers: myUsersReducer,
    orderList: orderListReducer
})

export { rootPersistConfig, rootReducer };
