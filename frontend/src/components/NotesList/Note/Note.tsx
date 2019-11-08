import React, { useEffect, useState } from "react";
import "./Note.css";
const Note = ({ key, title, body, date_created, date_editted }: any) => {
  if (date_editted > date_created) {
    return (
      <div key={key} className="note-container">
        <div className="note-title">{title}</div>
        <div className="note-body">{body}</div>
        <div className="note-date">Last editted {date_editted}</div>
      </div>
    );
  }
  else{
return(

  <div key={key} className="note-container">
  <div className="note-title">{title}</div>
  <div className="note-body">{body}</div>
  <div className="note-date">{date_created}</div>
</div>

)

  }
};

export default Note;
