import { createSlice } from "@reduxjs/toolkit";

export const mySliceContacts = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    removeContact(state, action) {
      return state.items.filter((item) => item.id !== action.payload);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, changeFilter } =
  mySliceContacts.actions;
