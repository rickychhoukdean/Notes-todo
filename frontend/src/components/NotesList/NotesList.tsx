import React, { useEffect, useState } from "react";
import Axios from "axios";
import Note from "./Note/Note";
import NoteDisplay from "../NoteDisplay/NoteDisplay";
import "./NoteList.css";
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
  const [search, setSearch] = useState<string>("");
  const [activeNote, setActiveNote] = useState({
    id: 0,
    body: "Please enter your body",
    title: "Please enter a title"
  });

  useEffect(() => {
    Axios.get("http://localhost:8000/api/notes/").then(res => {
      const pulledNotes = res.data;
      setNotes(pulledNotes);
    });
  }, []);

  useEffect(() => {
    const searchedResults = notes.filter(note => {
      note.body.toLowerCase().includes(search);
    });

    setNotes(searchedResults);
  }, [search]);

  function searchQuery(event: any) {
    setSearch(event.target.value.toLowerCase());
  }

  useEffect(() => {
    Axios.get(`http://localhost:8000/api/notes/${active}`).then(res => {
      setActiveNote(res.data);
    });
  }, [active]);

  return (
    <div className="flex">
      <section className="left-section">
        <textarea
          rows={1}
          placeholder="Search"
          onChange={searchQuery}
        ></textarea>
        <ul className="note-list">
          {notes.map(note => (
            <div
              key={note.id}
              onClick={() => {
                setActive(note.id);
              }}
            >
              <Note
                id={note.id}
                title={note.title}
                body={note.body}
                date_created={note.date_created}
                date_editted={note.date_editted}
              />
            </div>
          ))}
        </ul>
      </section>
      <section className="right-section">
        <NoteDisplay
          key={activeNote.id}
          body={activeNote.body}
          title={activeNote.title}
          setting={"edit"}
        />
      </section>
    </div>
  );
};

export default NotesList;
