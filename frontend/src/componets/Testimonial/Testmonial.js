import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import "./Testimonial.css";
const Testmonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    speed: 1000,
    swipeToSilde: true,
    autoPlaySpeed: 1000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-3 px-3">
        <p>
          Exceptional Service: Our team went above and beyond to ensure a
          seamless experience. From personalized itineraries to prompt
          assistance, we prioritize your comfort. Your journey with us promises
          not just travel, but a collection of cherished memories.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Jonh Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-3 px-3">
        <p>
          Unforgettable Adventures: Join us for transformative journeys that
          transcend the ordinary. Immerse yourself in diverse cultures,
          breathtaking landscapes, and captivating experiences. Our meticulously
          curated trips promise moments of awe, discovery, and joy.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Jonh Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-3 px-3">
        <p>
          Customer Delight: Your satisfaction is our priority. Our commitment to
          excellence shines through in the glowing reviews of our satisfied
          travelers. Trust us to turn your travel dreams into reality, providing
          unparalleled service and creating memories that last a lifetime.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Jonh Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-3 px-3">
        <p>
          Customer Delight: Your satisfaction is our priority. Our commitment to
          excellence shines through in the glowing reviews of our satisfied
          travelers. Trust us to turn your travel dreams into reality, providing
          unparalleled service and creating memories that last a lifetime.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Jonh Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testmonial;
