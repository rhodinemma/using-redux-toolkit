import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCampaign } from "../../redux/campaignSlice";
import "./index.css";

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
          <div className="spinner">
            <center>
              <Spinner animation="border" size="lg" />
            </center>
          </div>
        ) : (
          <>
            <Container>
              <Row>
                <Col md={6}>
                  <>
                    {!image ? (
                      <div style={{ padding: "3rem" }}>
                        <center>
                          <Spinner animation="border" size="sm" />
                        </center>
                      </div>
                    ) : (
                      <img
                        src={`http://tuyambe.herokuapp.com/${image}`}
                        alt={title}
                        style={{ height: "300px", width: "381px" }}
                        className="rounded"
                      />
                    )}
                  </>
                </Col>
                <Col mb={6}>
                  <p
                    className="display-6"
                    style={{ fontSize: "30px", fontWeight: "bold" }}
                  >
                    {title}
                  </p>
                  <p className="lead">{story}</p>
                  <p className="display-6" style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Category: {category}
                  </p>
                  <p className="lead">Amount needed: {amount}</p>
                </Col>
              </Row>
            </Container>
            <br />
          </>
        )}
      </div>
    </>
  );
};

export default CampaignDetail;
