import React from "react";
import "./NoteDisplay.css";
const NoteDisplay = ({ key, title, body }: any) => {

  return (
    <div key={key} className="note-display">
      <div className="display-note-title">{title}</div>
      <div className="display-note-body">{body}</div>
    </div>
  );
};

export default NoteDisplay;
