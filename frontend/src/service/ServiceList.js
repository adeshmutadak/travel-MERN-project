import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customization from "../assets/images/customization.png";
const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Elevate your travel experience by staying ahead of the weather curve with our real-time weather updates.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Embark on journeys with tour guides, ensuring every step of your adventure is guided by, knowledge.",
  },
  {
    imgUrl: customization,
    title: "Customization",
    desc: "Discover the world's wonders with the best tour guides by your side, offering personalized experiences .",
  },
];
const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
