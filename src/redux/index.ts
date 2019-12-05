//
import { createStore, applyMiddleware, Middleware, Store } from "redux";
import { persistStore } from "redux-persist";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
//
import rootReducer from "./rootReducer";

// -----------------------------------------------------------------------
const initailState = {};
//
const logger: Middleware = createLogger();
const middlewares = [thunk];
let store: Store;
//
if (process.env.NODE_ENV === "development") {
  // middlewares.push(logger);
  store = createStore(
    rootReducer,
    initailState,
    applyMiddleware(thunk, logger)
  );
} else {
  //
  store = createStore(
    rootReducer,
    initailState,
    applyMiddleware(...middlewares)
  );
}
//
const persistor = persistStore(store);

export { store, persistor };
