import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const LoginPrompt: React.FC = () => {
  function logout(event: any) {
    event.preventDefault();
    localStorage.removeItem("username");
  }
  return (
    // <Link className="user-button" to="/">
      <Button variant="outline-dark" onClick={logout}>
        Logout
      </Button>
    // </Link>
  );
};

export default LoginPrompt;
