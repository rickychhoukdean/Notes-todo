import React, { useEffect, useState } from "react";
import Axios from "axios";
const NotesList: React.FC = () => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/notes/").then(res => {
      console.log(res.data);
    });
  });

  return <>this is the notes list its list</>;
};

export default NotesList;
