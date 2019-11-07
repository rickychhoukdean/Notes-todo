import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Home.scss";
import NotesList from "../../components/NotesList/NotesList";
const Home: React.FC = () => {
  function postNote() {
    Axios.post("http://localhost:8000/api/notes/", {
      title: "hihi",
      body: "hihih",
      user:1
    }).then(res => {
      console.log(res);
    }).catch(err=>{console.log(err)});
  }

  return (
    <>
      <Link className="user-button" to="/login">
        <Button variant="outline-dark">Login</Button>
      </Link>
      <Link className="user-button" to="/signup">
        <Button variant="outline-dark">Signup</Button>
      </Link>
      <Button onClick={()=>{postNote()}}>Create Note</Button>
      <section>
        <textarea rows={1} placeholder="Search"></textarea>
        <NotesList />
      </section>
      <section>
        
      </section>  
    </>
  );
};

export default Home;
