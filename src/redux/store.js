import { configureStore } from "@reduxjs/toolkit";
import campaignsReducer from "./campaignSlice";

export default configureStore({
  reducer: {
    campaigns: campaignsReducer,
  },
});
