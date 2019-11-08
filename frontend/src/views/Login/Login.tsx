import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as actions from "../../store/actions/auth";
import { connect } from "react-redux";
import Axios from "axios";
import { Redirect } from "react-router-dom";

const ConnectedLogin = (props: any) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function userStateChange(event: any) {
    setUsername(event.target.value);
  }

  function passStateChange(event: any) {
    setPassword(event.target.value);
  }

  function userAuth(event: any) {
    event.preventDefault();
    if (username && password) {
      Axios.get("http://localhost:8000/api/users/").then(res => {
        for (let user of res.data) {
          if (username === user.user && password === user.password) {
            localStorage.setItem("username", username);
            setUsername("")
          }
        }
      });
    }
  }

  if(localStorage.getItem("username")){
    return <Redirect to={"/"}></Redirect>;
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

const mapStateToProps = (state: any) => {
  return {
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAuth: (username: string, password: string) =>
      dispatch(actions.authLogin(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedLogin);
