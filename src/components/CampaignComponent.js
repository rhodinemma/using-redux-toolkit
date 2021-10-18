import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Banner from "../assets/images/hero.jpg";

const CampaignComponent = () => {
  const campaigns = useSelector((state) => state.campaigns);
  const renderList = campaigns.map((campaign) => {
    const { _id, title, amount, category, story } = campaign;

    return (
      <>
        <div className="display-2 text-center">
          {Object.keys(campaign).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <div class="row" key={_id}>
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
                              <Link
                                class="btn btn-warning btn-lg btn-block"
                                to={`/campaigns/${_id}`}
                                role="button"
                              >
                                {" "}
                                See progress
                              </Link>
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
  });
  return <>{renderList}</>;
};

export default CampaignComponent;
