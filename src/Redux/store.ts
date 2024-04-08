import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export const useAppSelector :TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector

export const useAppDispatch:()=> typeof store.dispatch=useDispatch