import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCampaigns = createAsyncThunk(
  "campaigns/getCampaigns",
  async () => {
    const response = await fetch("https://tuyambe-api.herokuapp.com/campaigns");
    if (response.ok) {
      const campaigns = await response.json();
      return { campaigns };
    }
  }
);

export const selectCampaign = createAsyncThunk(
  "campaigns/selectCampaign",
  async (id) => {
    const response = await fetch(
      `https://tuyambe-api.herokuapp.com/campaigns/${id}`
    );
    if (response.ok) {
      const campaign = await response.json();
      return { campaign };
    }
  }
);

export const campaignSlice = createSlice({
  name: "campaigns",
  initialState: [],
  extraReducers: {
    [getCampaigns.fulfilled]: (state, action) => {
      return action.payload.campaigns;
    },
    [selectCampaign.fulfilled]: (state, action) => {
      return action.payload.campaign;
    },
  },
});

export default campaignSlice.reducer;
