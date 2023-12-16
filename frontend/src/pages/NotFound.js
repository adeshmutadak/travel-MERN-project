import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../style/NotFound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Row>
        <Col lg="12" className="pt-05 text-center">
          <div className="thank__youu">
            <span>
              <i class="ri-error-warning-fill"></i>
              <h1 className="mb-4 fw-semibold"> 404 Not Found</h1>
              <h3 className="mb-04">You are in Wrong Place Please Go back</h3>
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

export default NotFound;
