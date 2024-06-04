import { combineReducers } from "redux";
import { createRouterReducer } from '@lagunovsky/redux-react-router';

import phonesReducer from "./phones/reducer";
import basketCart from "./basketCart/reducer";
import categories from "./categories/reducer";

export default history => combineReducers({
    phones: phonesReducer,
    router: createRouterReducer(history),
    cart: basketCart,
    categories: categories
})