import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import NotesList from "../../components/NotesList/NotesList";
import LoginPrompt from "../../components/LoginPrompt/LoginPrompt";
import LogoutPrompt from "../../components/LogoutPrompt/LogoutPrompt";
import CreateNote from "../../components/CreateNote/CreateNote";
const Home: React.FC = () => {
  return (
    <>
      {!localStorage.getItem("username") ? (
        <LoginPrompt />
      ) : (
        <>
          <Link className="user-button" to="/login">
            <LogoutPrompt />
          </Link>
          <CreateNote />
          <section>
            <NotesList />
          </section>
        </>
      )}
    </>
  );
};

export default Home;
