import React, { useEffect } from "react";
import "../style/Home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import World from "../assets/images/world.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../service/ServiceList";
import FeatureTourList from "../componets/featureTour/FeatureTourList";
import experienceImg from "../assets/images/experience.png";
import MasonryImage from "../componets/image-gallery/MasonryImage";
import Testmonial from "../componets/Testimonial/Testmonial";
import Newsletter from "../shared/Newsletter";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* HEro Section Start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex  align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={World} alt="" />
                </div>
                <h1>
                  Travelling Opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  "Embark on extraordinary journeys, where each destination
                  tells a unique tale. Explore, dream, and discover with us.
                  Adventure awaits – your next unforgettable chapter begins
                  here. Roam freely, stay curious, and collect moments along the
                  way."
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
          </Row>
          <SearchBar />
        </Container>
      </section>
      {/*  ======================== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we Serve </h5>
              <h2 className="services__title">
                We Offer Our best <span className="highlight">Services</span>
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* Feature Sections Tours Starts */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Exlpore"} />
              <h2 className="featured_tour-title">Our featured tours</h2>
            </Col>
            <FeatureTourList />
          </Row>
        </Container>
      </section>
      {/* Feature Sections Tours end */}
      {/* Experince Sections start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all <span className="highlight">Experience</span>{" "}
                  <br />
                  we will serve you
                </h2>
                <p>
                  Indulge in transformative experiences that define your
                  journey. Our meticulously curated adventures blend cultural
                  immersion with thrilling escapades, creating unforgettable
                  memories. Elevate your travel with personalized encounters,
                  exceptional service, and unparalleled exploration, only with
                  us.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>12+</span>
                  <h6>Years of Experince</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experince__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Experiencce Sections  end */}
      {/* Gallery Section  start*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our Customers Tour Gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImage />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Gallery Section  end*/}

      {/* Testimonials  section starts */}
      <section>
        <Container>
          {" "}
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testmonial />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Testimonials  section end */}
      <Newsletter />
    </>
  );
};

export default Home;
