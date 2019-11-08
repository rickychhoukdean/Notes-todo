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
  const [active, setActive] = useState<number | null>(null);
  const [search, setSearch] = useState<string | null>(null);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/notes/").then(res => {
      console.log(res.data);
      const pulledNotes = res.data;
      setNotes(pulledNotes);
    });
  }, []);

  if (active) {
    return (
      <ul>
        {notes.map(note => (
          <div
            key={note.id}
            onClick={() => {
              setActive(note.id);
            }}
          >
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
  } else
    return (
      <div
        onClick={() => {
          setActive(null);
        }}
      >
        hi
      </div>
    );
};

export default NotesList;
