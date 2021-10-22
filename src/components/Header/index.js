import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./header.css";

export default function Header() {
  return (
    <>
      <header className="App-header">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          text="dark"
          variant="light"
          fixed="top"
        >
          <Container>
            <center>
            <Nav>
              <Link to={"/"} className="nav-link">
                <b className="brand">
                 #Tuyambe
                </b>
              </Link>
            </Nav>
            </center>
          </Container>
        </Navbar>
        <br />
        <br />
        <br />
      </header>
    </>
  );
}
