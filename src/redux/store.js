import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./features/formSlice";

export const store = configureStore({
  reducer: {
    form: FormReducer,
  },
});
