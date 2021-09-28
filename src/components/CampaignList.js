import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCampaignsAsync } from "../redux/campaignSlice";

const CampaignList = () => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state.campaigns);

  useEffect(() => {
    dispatch(getCampaignsAsync());
  }, [dispatch]);

  return (
    <div className="text-center">
      {campaigns.map((campaign) => (
          <span className="align-items-center">
            <h1 className="display-6">{campaign.title}</h1>
            <br />
            <p style={{ fontSize: "20px" }}>{campaign.story}</p>
            <br />
          </span>
        ))}
    </div>
  );
};

export default CampaignList;
