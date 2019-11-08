import React from "react";
const NoteDisplay = ({ key, title, body }: any) => {
  return (
    <div key={key} className="note-container">
      <div className="note-title">{title}</div>
      <div className="note-body">{body}</div>
    </div>
  );
};

export default NoteDisplay;
