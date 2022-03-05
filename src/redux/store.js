import { configureStore, createSlice } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { mySliceContacts } from "./sliceContacts/sliceContacts";

export const store = configureStore({
  reducer: {
    contacts: mySliceContacts.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});
