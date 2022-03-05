import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { mySliceContacts } from "./sliceContacts/sliceContacts";
import { mySliceFilter } from "./sliceFilter/sliceFilter";

const contacts = combineReducers({
  items: mySliceContacts.reducer,
  filter: mySliceFilter.reducer,
});

export const store = configureStore({
  reducer: {
    contacts,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});
