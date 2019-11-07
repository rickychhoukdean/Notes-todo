import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
const Login: React.FC = props => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function userStateChange(event: any) {
    setUsername(event.target.value);
    console.log(props);
  }

  function passStateChange(event: any) {
    setPassword(event.target.value);
  }

  function userAuth() {
    if (username && password) {
      Axios.get("http://localhost:8000/api/users/");
    }
  }

  return (
    <Form>
      <Form.Group controlId="formUserName">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          onChange={userStateChange}
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={passStateChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={userAuth}>
        Submit
      </Button>
    </Form>
  );
};

export default Login;
