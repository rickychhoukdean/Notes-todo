import React from "react";
import Button from "react-bootstrap/Button";

import "./Note.css";
import Axios from "axios";
const Note = ({ id, title, body, date_created, date_editted }: any) => {
  function deleteNote() {
    console.log(id, title);
    Axios.delete(`http://localhost:8000/api/notes/${id}/`);
    window.location.reload(); 

  }

  return (
    <div key={id} className="note-container">
      <div className="note-title">{title}</div>
      <div className="note-body">{body}</div>
      <div className="note-date">Last editted {date_editted}</div>
      <Button onClick={deleteNote}>Edit</Button>
      <Button onClick={deleteNote}>Delete</Button>
    </div>
  );
};

export default Note;
