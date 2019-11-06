import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Home.scss";
const Home: React.FC = () => {
  return (
    <>
      <Link className="user-button" to="/login">
        <Button variant="outline-dark">Login</Button>
      </Link>

      <Link className="user-button" to="/signup">
        <Button variant="outline-dark">Signup</Button>
      </Link>
    </>
  );
};

export default Home;
