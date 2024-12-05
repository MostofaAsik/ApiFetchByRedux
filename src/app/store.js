import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

//create a custom middleware
const customMiddleware = (store) => (next) => (action) => {

    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`State: ${JSON.stringify(store.getState())}`);
    return next(action)
}

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)

})
export default store;