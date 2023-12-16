import React, { useState, useContext, useEffect } from "react";
import "../style/Login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import registerImg from "../assets/images/register.png";
import userImg from "../assets/images/user.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";
import { BASE_URL } from "../utils/config.js";
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
  const handleChange = (e) => {
    setCredintials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const [credintials, setCredintials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credintials),
      });
      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
      }
      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />\
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userImg} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="username"
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already an account ? <Link to={"/login"}>Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
