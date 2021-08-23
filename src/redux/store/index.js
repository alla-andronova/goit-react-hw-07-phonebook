import { configureStore } from "@reduxjs/toolkit";
import contacts from "../slices/contacts";
import filter from "../slices/filter";

const rootReducer = {
  contacts,
  filter,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
