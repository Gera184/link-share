import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GoChecklist } from "react-icons/go";
import { TiHomeOutline } from "react-icons/ti";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="right-icon-col" md={{ span: 6 }}>
          <a className="list-icon" href="/home">
            <TiHomeOutline style={{ fontSize: "500%" }} />
          </a>
        </Col>
        <Col className="left-icon-col" md={{ span: 6 }}>
          <a className="list-icon" href="/list">
            <GoChecklist style={{ fontSize: "500%" }} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};
