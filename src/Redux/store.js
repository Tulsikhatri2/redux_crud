import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./CRUD/crudSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";   
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
    crud: crudReducer
})

const persistConfig = {
        key : "root",
        storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore ({
    reducer : persistedReducer,
})

// export const persistor = persistStore(store)
export default store;