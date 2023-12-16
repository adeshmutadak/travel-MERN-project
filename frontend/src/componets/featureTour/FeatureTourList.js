import React from "react";
import TourCard from "../../shared/TourCard";

import { Col } from "reactstrap";
import useFetch from "../hooks/useFetch.js";
import { BASE_URL } from "../../utils/config";
const FeatureTourList = () => {
  const {
    data: FeatureTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  // console.log(FeatureTours);
  return (
    <>
      {loading && <h4>Loading .........</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        FeatureTours?.map((tour) => (
          <Col lg="3" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeatureTourList;
