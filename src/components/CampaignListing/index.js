import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCampaigns } from "../../redux/campaignSlice";
import CampaignCard from "../CampaignCard/index";

const CampaignList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampaigns());
  }, [dispatch]);

  return (
    <>
      <h1
        className="text-center display-6"
        style={{ fontSize: "30px", fontWeight: "bold" }}
      >
        Active campaigns
      </h1>
      <CampaignCard />
    </>
  );
};

export default CampaignList;
