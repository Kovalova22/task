import React from "react";
import { Container, Row } from "reactstrap";

import "./topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <Container className="topbar_inner">
        <div className="topbar_left">
          <div class="divider"></div>
          <Row style={{ wordSpacing: "-0.7px" }}>
            {" "}
            <div className="ship">Free Shipping</div>{" "}
            <span style={{ zIndex: "20" }}>on orders of $50 or more</span>
          </Row>
        </div>
        <div className="topbar_right">
          <Row className="topbar_right_nav">
            <a href="#">About</a>
            <a href="#">How to buy</a>
            <a href="#">Order a catalog</a>
            <a href="#">contact</a>
            <a href="#">View order (35)</a>
          </Row>
        </div>
      </Container>
      <div className="resp_topbar">
        <div className="menu_icon">
          <div className="icon"></div>
          <div className="icon"></div>
          <div className="icon"></div>
        </div>
        <div className="logo_mob"> logo </div>
      </div>
    </div>
  );
}
export default Topbar;
