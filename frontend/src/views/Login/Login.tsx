import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
const Login: React.FC = () => {
  return(
    <Form >
    <Form.Group controlId="formUserName">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter Username" />
    </Form.Group>
    <Form.Group controlId="formPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>

  );
};

export default Login;
