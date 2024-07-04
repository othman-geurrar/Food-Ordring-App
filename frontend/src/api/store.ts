import { configureStore } from "@reduxjs/toolkit";
import { UserApi } from "./User/UserApi";
import { setupListeners } from "@reduxjs/toolkit/query";


const store = configureStore({
    reducer: {
        [UserApi.reducerPath]: UserApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            UserApi.middleware,
        ),
});

setupListeners(store.dispatch);

export default store;
