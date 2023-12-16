import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../style/ThankYou.css";
import { Link } from "react-router-dom";
const ThankYou = () => {
  return (
    <section>
      <Row>
        <Col lg="12" className="pt-05 text-center">
          <div className="thank__you">
            <span>
              <i class="ri-checkbox-circle-line"></i>
              <h1 className="mb-4 fw-semibold">Thank You</h1>
              <h3 className="mb-04">Your Tour is Booked.</h3>
              <Link to={"/home"}>
                {" "}
                <Button className="btn primary__btn w-25">Back to Home</Button>
              </Link>
            </span>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ThankYou;
