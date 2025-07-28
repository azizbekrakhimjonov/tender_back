import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import languageReducer from './languageSlice';


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    language: languageReducer,
  },
});
