"use client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/auth";
import { useEffect } from "react";

const store = configureStore({
    reducer: {
        auth: auth.reducer
    },
});

export const authActions = auth.actions;
export default function ReduxProvider({children}: {children: React.ReactNode}) {
    useEffect(() => {}, []);
    return <Provider store={store}>{children}</Provider>
}