import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCampaignAsync } from "../redux/campaignSlice";
import Banner from "../assets/images/hero.jpg";

const CampaignDetail = () => {
  const detail = useSelector((state) => state.campaigns);
  const { title, amount, category, story } = detail;
  const { campaignId } = useParams();
  console.log(detail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (campaignId && campaignId !== "") {
      dispatch(selectCampaignAsync(campaignId));
    }
  }, [dispatch, campaignId]);

  return (
    <>
      <div className="display-2 text-center">
        {Object.keys(detail).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div class="row">
            <div class="col-md-10 col-12 mx-auto">
              <section class="section my-4">
                <div class="container text-center">
                  <section>
                    <div class="row">
                      <div class="col-lg-4 mb-3">
                        <div class="card h-100 shadow card-img-top">
                          <div class="card-body">
                            <img
                              src={Banner}
                              alt={title}
                              style={{ height: "300px", width: "390px" }}
                            />
                            <h5 class="display-5">
                              <b>{title}</b>
                            </h5>
                            <br />
                            <h5>
                              <b>{category}</b>
                            </h5>
                            <br />
                            <h5>{story}</h5>
                            <br />
                            <h5 class="display-6">
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