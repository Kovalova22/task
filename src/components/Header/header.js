import React from "react";
import { Col, Container, Row } from "reactstrap";

import "./header.css";
import Topbar from "./Tobbar";

function Header() {
  return (
    <header>
      <Topbar />
      <Container className="header_inner">
        <section>
          <div className="logo">Logo</div>
        </section>
        <Container>
          <Row className="resp_row">
            <Col className="inner_li after_li brand_li">
              <a href="#">
                {" "}
                <span className="top_li">find by</span>{" "}
                <span className="bottom_li">brand</span>{" "}
              </a>
            </Col>
            <Col className="inner_li after_li part_li">
              <a href="#">
                {" "}
                <span className="top_li">find by</span>{" "}
                <span className="bottom_li">part type</span>
              </a>
            </Col>
            <Col className="inner_li after_li search_li">
              <a href="#" style={{ marginTop: "30px" }}>
                <span className="bottom_li"> search</span>
              </a>{" "}
            </Col>
            <Col className="inner_li number_li">
              {" "}
              <div
                style={{
                  marginTop: "15px",
                }}
              >
                {" "}
                <span className="top_li number">give us a call</span>{" "}
              </div>
              <div className="bottom_li tel">(800) 555-1212</div>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="bottom_header">
        <Container className="b_cont">
          <ul class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Parent Category</a>
            </li>
            <li>
              <a href="#">Child Category</a>
            </li>
            <li>Spare Parts</li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
export default Header;
