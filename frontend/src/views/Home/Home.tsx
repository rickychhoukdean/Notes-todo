import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Home.scss";
import NotesList from "../../components/NotesList/NotesList";
import LoginPrompt from "../../components/LoginPrompt/LoginPrompt";
import LogoutPrompt from "../../components/LogoutPrompt/LogoutPrompt";
import CreateNote from "../../components/CreateNote/CreateNote";
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
          <CreateNote/>
          <section>
            <NotesList />
          </section>
        </>
      )}
    </>
  );
};

export default Home;
