import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Videos from "../Video/Videos";
import CategoriesBar from "../CategoriesBar/CategoriesBar";

const HomeScreen = () => {
  return (
    <Container style={{ maxWidth: "80vw" }}>
      <CategoriesBar />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Videos />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
