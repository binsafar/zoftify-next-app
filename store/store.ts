import {configureStore} from '@reduxjs/toolkit'
import {postSlice} from "./feature/postSlice";

export const store = configureStore({
    reducer: {
        postSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;