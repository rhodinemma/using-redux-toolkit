import { configureStore } from "@reduxjs/toolkit";
import campaignReducer from "./campaignSlice";

export default configureStore({
  reducer: {
    campaigns: campaignReducer,
  },
});
