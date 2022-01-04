import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../images/2.jpg";
import person from "../images/person.jpg";

const Post = () => {
  return (
    <Container
      style={{
        width: 692,
        height: 472,
        border: "solid 1px #E0E0E0",
        borderRadius: 4,
      }}
    >
      <Row>
        <img
          src={img}
          width="692"
          height="220"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Row>
      <Row>
        <h5 style={{ margin: 5 }}>✍️Article</h5>
      </Row>
      <Row>
        <h4>
          Tax benefits for investors under trade and Various organisations...
        </h4>
      </Row>
      <Row>
        <p style={{ color: "grey", fontSize: 20 }}>
          I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </p>
      </Row>
      <Row>
        <Col style={{ marginLeft: 20 }}>
          <Row style={{ alignItems: "center", gap: 10 }}>
            <img
              style={{ borderRadius: "50%" }}
              src={person}
              width="48"
              height="48"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <p style={{ fontWeight: "bolder" }}>Sarah West</p>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Post;
