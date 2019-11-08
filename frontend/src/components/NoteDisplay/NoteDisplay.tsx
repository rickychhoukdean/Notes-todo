import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./NoteDisplay.css";
import Axios from "axios";
const NoteDisplay = ({ key, title, body, setting }: any) => {
  const [noteTitle, setNoteTitle] = useState(title);
  const [noteBody, setNoteBody] = useState(body);

  function changeTitle(event: any) {
    setNoteTitle(event.target.value);
  }

  function changeBody(event: any) {
    setNoteBody(event.target.value);
  }

  function save() {
    Axios.post("http://localhost:8000/api/notes/", {
      title,
      body,
      user: 26
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }


  if (setting === "edit") {
    return (
      <>
        <div key={key} className="note-display">
          <textarea
            className="note-title"
            value={noteTitle}
            onChange={changeTitle}
          ></textarea>
          <textarea
            className="note-body"
            value={noteBody}
            onChange={changeBody}
          ></textarea>
        </div>

        <Button onClick={save}>Save</Button>
      </>
    );
  } else {
    return (
      <div key={key} className="note-display">
        <div className="display-note-title">{title}</div>
        <div className="display-note-body">{body}</div>
      </div>
    );
  }
};

export default NoteDisplay;
