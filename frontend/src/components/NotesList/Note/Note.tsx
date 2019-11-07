import React, { useEffect, useState } from "react";
const Note = ({ key, title, body, date_created, date_editted }: any) => {
  
  return (
    <div key = {key}>
      <div>{title}</div>
      <div>{body}</div>
      <div>{date_created}</div>
      <div>{date_editted}</div>

    </div>
  );
};

export default Note;
