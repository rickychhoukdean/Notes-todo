import React from "react";
import Button from "react-bootstrap/Button";
const LoginPrompt: React.FC = () => {
  function logout(event: any) {
    event.preventDefault();
    localStorage.removeItem("username");
    window.location.reload(); 
  }
  return (
      <Button variant="outline-dark" onClick={logout}>
        Logout
      </Button>
  );
};

export default LoginPrompt;
