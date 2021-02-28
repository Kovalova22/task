import React from "react";
import { Container, ListGroup, ListGroupItem, Col } from "reactstrap";

import "./sidebar.css";

function Sidebar() {
  return (
    <aside>
      <Container className="aside_section">
        <Col className="side">
          <h4>Filter parts</h4>
          <ListGroup flush>
            <ListGroupItem>
              Option With <br /> Wrapping Line
            </ListGroupItem>
            <ListGroupItem>Active/Hover</ListGroupItem>
            <ListGroupItem>Filter Option</ListGroupItem>
            <ListGroupItem>Long Filter Option</ListGroupItem>
            <ListGroupItem>Filter Option</ListGroupItem>
            <ListGroupItem>Filter Option</ListGroupItem>
            <ListGroupItem>Filter Option</ListGroupItem>
            <ListGroupItem>Show All</ListGroupItem>
          </ListGroup>
        </Col>
      </Container>
    </aside>
  );
}
export default Sidebar;
