import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { Redirect } from "react-router-dom";

const Signup: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function userStateChange(event: any) {
    setUsername(event.target.value);
  }

  function passStateChange(event: any) {
    setPassword(event.target.value);
  }

  //If user signs up with a unique username and both fields are filled then the account will be created and locastorage will be set with their id
  function signup(event: any) {
    event.preventDefault();
    if (username && password) {
      Axios.post("http://localhost:8000/api/users/", {
        user: username,
        password
      })
        .then(res => {
          localStorage.setItem("username", res.data.id);
          setUsername("");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  if (localStorage.getItem("username")) {
    return <Redirect to={"/"}></Redirect>;
  }

  return (
    <div className="form-flex">
    <Form >
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
      <Button variant="primary" type="submit" onClick={signup} className="login-button">
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default Signup;
