import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCampaign } from "../redux/campaignSlice";

const CampaignDetail = () => {
  const detail = useSelector((state) => state.campaigns);
  const { title, amount, category, story, image } = detail;
  const { campaignId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (campaignId && campaignId !== "") {
      dispatch(selectCampaign(campaignId));
    }
  }, [dispatch, campaignId]);

  return (
    <>
      <div className="display-2 text-center">
        {Object.keys(detail).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="row">
            <div className="col-md-10 col-12 mx-auto">
              <section className="section my-4">
                <div className="container text-center">
                  <section>
                    <div className="row">
                      <div className="col-lg-4 mb-3">
                        <div className="card h-100 shadow card-img-top">
                          <div className="card-body">
                            <img
                              src={image}
                              alt={title}
                              style={{ height: "300px", width: "390px" }}
                            />
                            <h5 className="display-5">
                              <b>{title}</b>
                            </h5>
                            <br />
                            <h5>
                              <b>{category}</b>
                            </h5>
                            <br />
                            <h5>{story}</h5>
                            <br />
                            <h5 className="display-6">
                              {" "}
                              <b>
                                UGX {amount} <small>goal</small>
                              </b>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CampaignDetail;
