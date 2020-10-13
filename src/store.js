import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};
export default function configureStore(preloadedState) {
  const composedEnhancers = composeWithDevTools();
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    preloadedState,
    composedEnhancers
  );
  const persistor = persistStore(store);

  return { store, persistor };
}
