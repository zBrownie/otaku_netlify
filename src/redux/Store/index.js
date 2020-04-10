import { createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "../Reducers";

const persitConfig = {
  key: "otakulist",
  storage,
};

const persistedReducer = persistReducer(persitConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
