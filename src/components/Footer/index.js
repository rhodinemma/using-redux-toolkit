import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <>
        <br />

        <Container>
          <Row>
            <Col md={6}>
              <p>Copyright &copy; {new Date().getFullYear()} Tuyambe Uganda</p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
