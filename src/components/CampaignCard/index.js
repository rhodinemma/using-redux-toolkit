import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Card, Spinner } from "react-bootstrap";
import "./card.css";

const CampaignComponent = () => {
  const campaigns = useSelector((state) => state.campaigns);
  const newData = Array.from(campaigns);

  return (
    <>
      {Object.keys(campaigns).length === 0 ? (
        <div className="spinner">
          <center>
            <Spinner animation="border" size="xl" />
          </center>
        </div>
      ) : (
        <>
          <section className="section my-4">
            <Container className="text-center">
              <section>
                <Row>
                  <>
                    {newData.map((campaign, key) => (
                      <div className="col-lg-4 mb-3">
                        <div className="card shadow">
                          <div className="card-body">
                            <Link
                              to={`/campaigns/${campaign._id}`}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              <Card.Body>
                                <Card.Title>{campaign.title}</Card.Title>
                                <Card.Text>{campaign.category}</Card.Text>
                                <Card.Text>{campaign.story.slice(0,100)}</Card.Text>
                                <Card.Text>{campaign.amount}</Card.Text>
                              </Card.Body>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                </Row>
              </section>
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default CampaignComponent;
