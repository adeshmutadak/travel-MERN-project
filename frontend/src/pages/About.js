import React, { useEffect } from "react";
import "../style/About.css";
import CommonSection from "../shared/CommonSection";
import { Col, Container, Row } from "reactstrap";
import Subtitle from "../shared/Subtitle";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <CommonSection title={"About Us"} />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="about__us">
              {" "}
              <p>
                Welcome to <span className="highlight">TravelWorld</span>, where
                every journey is a gateway to extraordinary experiences. Our
                passion for exploration drives us to craft seamless and
                unforgettable adventures. With a commitment to authenticity and
                personalized service, we invite you to join us on a voyage that
                transcends destinations, turning each trip into a timeless tale.
                Discover the world with us, where wanderlust meets exceptional
                travel.
              </p>
              <Subtitle
                subtitle={"Exploring the world, one adventure at a time."}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
