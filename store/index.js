import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import templates from "./reducers/templates";
// reducers
//import reducers here

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const rootReducer = combineReducers({
  // reducers will go in here
  templates,
});

const makeStore = ({ isServer }) => {
  if (isServer) {
    return createStore(rootReducer, bindMiddleware([thunkMiddleware]));
  } else {
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "nextjs",
      //   whitelist: ["cart"], // only cart will be persisted, add other reducers if needed
      // whitelist simply means an array of key items that will be persisted
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware]),
    );

    store.__persistor = persistStore(store);

    return store;
  }
};

export const wrapper = createWrapper(makeStore);
