import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './LoginPrompt.css'
const LoginPrompt: React.FC = () => {
  return (
    <div className="login-flex">
    <div>Please login or signup!</div>
    <div className="button-flex">
      <Link className="user-button" to="/login">
        <Button variant="outline-dark">Login</Button>
      </Link>
      <Link className="user-button" to="/signup">
        <Button variant="outline-dark">Signup</Button>
      </Link>
    </div>
    </div>
  );
};

export default LoginPrompt;
