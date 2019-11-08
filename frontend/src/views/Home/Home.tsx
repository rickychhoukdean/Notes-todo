import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Home.scss";
import NotesList from "../../components/NotesList/NotesList";
import LoginPrompt from "../../components/LoginPrompt/LoginPrompt";
const Home = (props: any) => {
  function postNote() {
    Axios.post("http://localhost:8000/api/notes/", {
      title: "hihi",
      body: "hihih",
      user: 1
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      {!localStorage.getItem("username") ? (
        <LoginPrompt />
      ) : (
        <>
          <Link className="user-button" to="/login">
            <Button variant="outline-dark">Logout</Button>
          </Link>
          <Button
            onClick={() => {
              postNote();
            }}
          >
            Create Note
          </Button>

          <section>
            <NotesList />
          </section>
        </>
      )}
    </>
  );
};

export default Home;
