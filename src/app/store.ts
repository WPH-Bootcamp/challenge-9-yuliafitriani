import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@/entities/user/model/auth.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
