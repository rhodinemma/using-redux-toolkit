import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCampaignsAsync = createAsyncThunk(
  "campaigns/getCampaignsAsync",
  async () => {
    const response = await fetch("http://localhost:5000/campaigns");
    if (response.ok) {
      const campaigns = await response.json();
      return { campaigns };
    }
  }
);

export const campaignSlice = createSlice({
  name: "campaigns",
  initialState: [],
  extraReducers: {
    [getCampaignsAsync.fulfilled]: (state, action) => {
      return action.payload.campaigns;
    },
  },
});

export default campaignSlice.reducer;
