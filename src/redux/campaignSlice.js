import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCampaignsAsync = createAsyncThunk(
  "campaigns/getCampaignsAsync",
  async () => {
    const response = await fetch("http://localhost:5000/campaigns");
    if (response.ok) {
      const campaigns = await response.json();
      console.log(campaigns);
      return { campaigns };
    }
  }
);

export const selectCampaignAsync = createAsyncThunk(
  "campaigns/selectCampaignAsync",
  async (id) => {
    const response = await fetch(`http://localhost:5000/campaigns/${id}`);
    if (response.ok) {
      const campaign = await response.json();
      console.log(campaign);
      return { campaign };
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
    [selectCampaignAsync.fulfilled]: (state, action) => {
      return action.payload.campaign;
    },
  },
});

export default campaignSlice.reducer;
