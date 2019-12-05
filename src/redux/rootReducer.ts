import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
  // whitelist: ['cart']
};

const rootReducer = combineReducers({
  // user: userReducer,
  // cart: cartReducer,
  // directory: directoryReducer,
  // shop: shopReducer
  user: () => 1
});

export default persistReducer(persistConfig, rootReducer);
