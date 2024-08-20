import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../use-local-storage";

const {
    readLocalStorage, 
    updateLocalStorage
} = useLocalStorage('auth', {
    isAuth: false,
    token: "",
  });
  
export default createSlice({
    name: "auth",
    initialState: readLocalStorage(),
    reducers: {
        logout: () => updateLocalStorage(),
        login: (_, action) =>  updateLocalStorage({
            isAuth: true,
            ...(action.payload)
        })

    }
})