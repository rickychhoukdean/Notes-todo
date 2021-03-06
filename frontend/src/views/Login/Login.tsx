import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import './Login.css'

const Login :React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function userStateChange(event: any) {
    setUsername(event.target.value);
  }
  function passStateChange(event: any) {
    setPassword(event.target.value);
  }

  //If user is authenticated via axios call then set their userid to localstorage
  function userAuth(event: any) {
    event.preventDefault();
    if (username && password) {
      Axios.get("http://localhost:8000/api/users/")
        .then(res => {
          for (let user of res.data) {
            if (username === user.user && password === user.password) {
              localStorage.setItem("username", user.id);
              setUsername("");
            }
          }
        })
        .catch(err => console.log(err));
    }
  }

  if (localStorage.getItem("username")) {
    return <Redirect to={"/"}></Redirect>;
  }

  return (
    <div className="form-flex">
    <Form className="input">
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
      <Button variant="primary" type="submit" onClick={userAuth} className="login-button">
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default Login;
