import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCampaigns } from "../redux/campaignSlice";
import CampaignComponent from "./CampaignComponent";

const CampaignList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampaigns());
  }, [dispatch]);

  return (
      <CampaignComponent />
  );
};

export default CampaignList;
