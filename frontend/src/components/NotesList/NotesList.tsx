import React, { useEffect, useState } from "react";
import Axios from "axios";
import Note from "./Note/Note";

type note = {
  id: number;
  title: string;
  body: string;
  date_created: any;
  date_editted: any;
};

const NotesList: React.FC = () => {
  const [notes, setNotes] = useState<note[]>([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/notes/").then(res => {
      const pulledNotes = res.data;
      setNotes(pulledNotes);
    });
  }, []);

  return (
    <ul>
      {notes.map(note => (
        <div key={note.id}>
          <Note
            title={note.title}
            body={note.body}
            date_created={note.date_created}
            date_editted={note.date_editted}
          />
        </div>
      ))}
    </ul>
  );
};

export default NotesList;
