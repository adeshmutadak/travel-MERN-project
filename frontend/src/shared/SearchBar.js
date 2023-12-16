import React, { useRef } from "react";
import "./SeachBar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/config.js";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;
    if (location === "") {
      return alert("Enter a Location");
    } else if (distance === "" || distance <= 0) {
      return alert("Enter Valid Distance ");
    } else if (maxGroupSize === "" || maxGroupSize <= 0) {
      return alert("Enter a Valid Peoples");
      //   notify1();
    }
    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );
    if (!res.ok) {
      // Display an error message or use toast notifications
      alert("Something went wrong");
    }

    const result = await res.json();

    navigate(
      `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  };

  return (
    <div className="container">
      <form>
        <div class="form-row">
          <div class="col">
            <label for="location">Location</label>
            <i class="ri-map-pin-line"></i>
            <input
              type="text"
              class="form-control"
              id="location"
              placeholder="Where are you going?"
              ref={locationRef}
            />
          </div>
          <div class="col">
            <label for="distance">Distance</label>
            <i class="ri-map-pin-time-line"></i>
            <input
              type="number"
              class="form-control"
              id="distance"
              placeholder="Distance K/m"
              ref={distanceRef}
            />
          </div>
          <div class="col">
            <label for="maxPeople">Max People</label>
            <i class="ri-group-line"></i>
            <input
              type="number"
              class="form-control"
              id="maxPeople"
              placeholder="0"
              ref={maxGroupSizeRef}
            />
          </div>
          <div class="column">
            <label for="search" class="invisible">
              Search
            </label>
            <span
              type="submit"
              class="btn  form-control"
              onClick={searchHandler}
            >
              Search
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
