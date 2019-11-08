import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Home.scss";
import NotesList from "../../components/NotesList/NotesList";
import LoginPrompt from "../../components/LoginPrompt/LoginPrompt";
import LogoutPrompt from "../../components/LogoutPrompt/LogoutPrompt";
const Home = (props: any) => {
  return (
    <>
      {!localStorage.getItem("username") ? (
        <LoginPrompt />
      ) : (
        <>
          <Link className="user-button" to="/login">
            <LogoutPrompt/>
          </Link>
          <Button>Create Note</Button>
          <section>
            <NotesList />
          </section>
        </>
      )}
    </>
  );
};

export default Home;
