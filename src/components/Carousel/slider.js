import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Banner from "../../assets/images/hero.jpg";
import "./slider.css";

export default function Slider() {
  return (
    <>
      <Col md={6}>
        <Row>
          <Container mt={2} fluid>
            <Row>
              <Col md={10} className="col-12 mx-auto">
                <Row>
                  <Image className="img img-fluid rounded" src={Banner} />
                </Row>
              </Col>
            </Row>
          </Container>
        </Row>
      </Col>
    </>
  );
}
