import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./main.css";

function MainSection() {
  return (
    <Container className="main_products">
      <Row xs="4">
        <Col className="img">
          <figure>
            <img
              src="https://i.citrus.ua/imgcache/size_500/uploads/shop/5/3/53faeb6c9eb23c05e14cf63d2b96965a.jpg"
              alt="watch"
            />
            <button>View</button>
            <figcaption>Product Name</figcaption>{" "}
          </figure>
        </Col>
        <Col className="img">
          <figure>
            <img
              src="https://cdn.shopify.com/s/files/1/1420/3982/products/Ankari_Floruss_White_1700x1100.jpg?v=1591387618"
              alt="shoes"
            />
            <button>View</button>
            <figcaption>Product Name</figcaption>{" "}
          </figure>
        </Col>
        <Col className="img">
          <figure>
            <img
              src="https://cdn.shopify.com/s/files/1/0106/1282/products/321OLW6_1024x1024.jpeg?v=1527065627"
              alt="bottle"
            />
            <button>View</button>
            <figcaption>Product Name</figcaption>{" "}
          </figure>
        </Col>
        <Col className="img">
          <figure>
            <img
              src="http://coffeegraphy.com/wp-content/uploads/2013/08/gadgets-for-writing.jpg"
              alt="gadget"
            />
            <button>View</button>
            <figcaption>Product Name</figcaption>{" "}
          </figure>
        </Col>
      </Row>
      <Row xs="4">
        <Col className="img">
          <figure>
            <img
              src="https://lh3.googleusercontent.com/proxy/ZoHiyyxDpL4BnrdSmB4Oe46Wp8RGzknxrhBVvDaH2W9S6q1AQ9CCTSKEqkos5rfulsNrk-XNbeMdfKnBOCCjTViD9p0JE1ZbPk91hD6HqJmHEKbisA"
              alt="nail"
            />
            <button>View</button>
            <figcaption>Product Name</figcaption>{" "}
          </figure>
        </Col>
        <Col className="img">
          <figure>
            <img
              src="https://images.crateandbarrel.com/is/image/Crate/18thStreet16pcDinnerwareSetSHF15"
              alt="dishes"
            />
            <button>View</button>
            <figcaption>Long Product Name With Wrapping Line</figcaption>{" "}
          </figure>
        </Col>
        <Col className="img">
          <figure>
            <img
              src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/elsa-perettidiamonds-by-the-yard-single-diamond-pendant-27465846_933080_ED.jpg?&op_usm=1.0,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&"
              alt="necklace"
            />
            <button>View</button>
            <figcaption>Product Name</figcaption>{" "}
          </figure>
        </Col>
        <Col className="img">
          <figure>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71UV1HvHw7L._SL1500_.jpg"
              alt="pram"
            />
            <button>View</button>
            <figcaption>Long Product Name With Wrapping Line</figcaption>{" "}
          </figure>
        </Col>
      </Row>
      <Row xs="4">
        <Col className="img">
          <figure>
            <img
              src="https://douglascuddletoy.com/wp-content/uploads/2018/11/1902.jpg"
              alt="pig"
            />
            <button>View</button>
            <figcaption>Product Name</figcaption>{" "}
          </figure>
        </Col>
        <Col className="img">
          <figure>
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1604021663000"
              alt="iphone"
            />
            <button>View</button>
            <figcaption>Product Name</figcaption>{" "}
          </figure>
        </Col>
        <Col className="img">
          <figure>
            <img
              src="https://in.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa4882b06/C100SI_red-front_dvHAMaster.png?sw=537&sfrm=png"
              alt="headphones"
            />
            <button>View</button>
            <figcaption>Long Product Name With Wrapping Line</figcaption>{" "}
          </figure>
        </Col>
        <Col className="img">
          <figure>
            <img
              src="https://brain-images-ssl.cdn.dixons.com/2/2/10181422/u_10181422.jpg"
              alt="kettle"
            />
            <button>View</button>
            <figcaption>Long Product Name With Wrapping Line</figcaption>{" "}
          </figure>
        </Col>
      </Row>
    </Container>
  );
}
export default MainSection;
