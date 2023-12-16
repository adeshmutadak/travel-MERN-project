import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/tours",
    display: "Explore More",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const quick__links2 = [
  {
    path: "/about",
    display: "About us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact-us",
    display: "Contact Us",
  },
];
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Embark on Limitless Exploration, Where Dreams and Adventures
                Journeys for Every Explorer.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to={"#"}>
                    <i class="ri-youtube-line"></i>{" "}
                  </Link>
                </span>
                <span>
                  <Link to={"#"}>
                    <i class="ri-instagram-line"></i>{" "}
                  </Link>
                </span>
                <span>
                  <Link to={"#"}>
                    <i class="ri-facebook-fill"></i>{" "}
                  </Link>
                </span>
                <span>
                  <Link to={"#"}>
                    <i class="ri-twitter-line"></i>{" "}
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link__title">Discover</h5>
            <ListGroup className="footer__quick__links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 pt-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link__title">Quick Links</h5>
            <ListGroup className="footer__quick__links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 pt-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          {/* <Col lg="3">
            {" "}
            <h5 className="footer__link__title">Quick Links</h5>
            <ListGroup className="footer__quick__links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 pt-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col> */}
          <Col lg="3">
            <h5 className="footer__link__title">Contact</h5>
            <ListGroup className="footer__quick__links">
              <ListGroupItem className="ps-0 pt-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">Maharashtra India , Nashik</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 pt-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">adeshmutadak@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 pt-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  Phone:
                </h6>
                <p className="mb-0">+91-7030995694</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year} Design and Develope by Adesh . All rights are
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
