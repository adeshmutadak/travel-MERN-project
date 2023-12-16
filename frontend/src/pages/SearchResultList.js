import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";
import TourCard from "../shared/TourCard";
import { useLocation } from "react-router-dom";
import NewsLetter from "./../shared/Newsletter";
import toast, { Toaster } from "react-hot-toast";

const SearchResultList = () => {
  const notify = () => toast("Here is your toast.");
  const location = useLocation();
  const [data] = useState(location.state);
  // console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No Tour Found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default SearchResultList;
