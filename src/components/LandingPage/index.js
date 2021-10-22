import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import {
  faPeopleArrows,
  faUserLock,
  faCheckCircle,
  faPhone,
  faEnvelopeOpenText,
  faMapPin,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css"

const LandingPage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={12} style={{ fontSize: "18px", letterSpacing: "1px" }}>
            <h1 className="p-3 display-5">The Coolest Fundraising Space</h1>

            <p className="lead">
              Tuyambe is a new platform that arose to meet the demands of
              contactless payments, ensuring cashless donations. Help charities
              raise vital funds, to support those in their communities
            </p>

            <p className="lead">
              <Link
                className="btn btn-success btn-lg"
                to="/tuyambe/progress"
                role="button"
              >
                Get Started Now{" "}
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
      <br />

      <Container>
        <h3 className="mb-3 text-left headings" style={{ fontWeight: "bold" }}>
          Featured stories
        </h3>
        <Row>
          <Col md={4}>
            <p className="lead">
              Tuyambe is a new platform that arose to meet the demands of
              contactless payments, ensuring cashless donations. Help charities
              raise vital funds, to support those in their communities
            </p>
          </Col>
          <Col md={4}>
            <p className="lead">
              Tuyambe is a new platform that arose to meet the demands of
              contactless payments, ensuring cashless donations. Help charities
              raise vital funds, to support those in their communities
            </p>
          </Col>
          <Col md={4}>
            <p className="lead">
              Tuyambe is a new platform that arose to meet the demands of
              contactless payments, ensuring cashless donations. Help charities
              raise vital funds, to support those in their communities
            </p>
          </Col>
        </Row>
      </Container>
      <br />

      <Container>
        <h3 className="mb-3 text-left headings" style={{ fontWeight: "bold" }}>
          Service checklist
        </h3>
        <Row>
          <Col mb={4} className="p-3 icons">
            <center>
              <FontAwesomeIcon icon={faPeopleArrows} size="5x" />
              <p className="lead p-4">Fundraise and Support</p>
            </center>
          </Col>
          <Col mb={4} className="p-3 icons">
            <center>
              <FontAwesomeIcon icon={faUserLock} size="5x" />
              <p className="lead p-4">Safe and Secure</p>
            </center>
          </Col>
          <Col mb={4} className="p-3 icons">
            <center>
              <FontAwesomeIcon icon={faCheckCircle} size="5x" />
              <p className="lead p-4">Accurate and Real</p>
            </center>
          </Col>
        </Row>
      </Container>

      <Container>
        <h3 className="mb-3 text-left headings" style={{ fontWeight: "bold" }}>
          Get in touch
        </h3>
        <Row>
          <Col md={4} className="p-3">
            <center>
              <Card className="shadow-lg rounded card">
                <Card.Title className="p-3">
                  <FontAwesomeIcon icon={faPhone} size="1x" /> Phone
                </Card.Title>
                <Card.Body>(+256)-7572-48831</Card.Body>
              </Card>
            </center>
          </Col>
          <Col md={4} className="p-3">
            <center>
              <Card className="shadow-lg rounded">
                <Card.Title className="p-3">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} size="1x" /> Email
                  Address
                </Card.Title>
                <Card.Body>tuyambe@info.com</Card.Body>
              </Card>
            </center>
          </Col>
          <Col md={4} className="p-3">
            <center>
              <Card className="shadow-lg rounded">
                <Card.Title className="p-3">
                  <FontAwesomeIcon icon={faMapPin} size="1x" /> Location
                </Card.Title>
                <Card.Body>Mukono, Uganda</Card.Body>
              </Card>
            </center>
          </Col>
        </Row>
      </Container>
      <br />

      <Container>
        <Row>
          <h3 className="mb-3 text-left headings" style={{ fontWeight: "bold" }}>
            Leave a message
          </h3>
          <Col md={12}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter your email here"
                  required
                />
                <br />
                <textarea
                  rows="5"
                  cols="50"
                  name="message"
                  class="form-control"
                  placeholder="Drop your message here"
                ></textarea>
              </Form.Group>

              <p className="lead">
                <Link
                  className="btn btn-success btn-lg"
                  type="submit"
                  role="button"
                >
                  Send Message <FontAwesomeIcon icon={faPaperPlane} />
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
