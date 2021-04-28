import { combineReducers } from "redux";
import userReducer from "./user";
import shopReducer from "./shop";
import productReducer from "./product";

const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer,
  product: productReducer,
});

export default rootReducer;
