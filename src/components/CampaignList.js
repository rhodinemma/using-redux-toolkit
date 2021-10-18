import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCampaignsAsync } from "../redux/campaignSlice";
import CampaignComponent from "./CampaignComponent";

const CampaignList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampaignsAsync());
  }, [dispatch]);

  return (
    <div className="ui grid container">
      <CampaignComponent />
    </div>
  );
};

export default CampaignList;
