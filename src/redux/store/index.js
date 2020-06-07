import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "../reducers/authUser";
const persistConfig = {
  key: "root",
  storage
};
const enhancers = compose(applyMiddleware(reduxThunk));
const store = createStore(
  persistReducer(persistConfig, combineReducers({ auth })),
  composeWithDevTools(enhancers)
);
const persistor = persistStore(store);
export { store, persistor };
