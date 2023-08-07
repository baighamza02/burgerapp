import { configureStore } from "@reduxjs/toolkit";
import billReducer from "./bill";

const store = configureStore({
  reducer: {
    bill: billReducer,
  },
});

export default store;