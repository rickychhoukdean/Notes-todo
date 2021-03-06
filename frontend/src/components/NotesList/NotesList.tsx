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
    body: "",
    title: "Please expand a note or button on the left "
  });

  useEffect(() => {
    Axios.get("http://localhost:8000/api/notes/").then(res => {
      const pulledNotes = res.data;
      //Filters the pulled data - I would have like to query this data already filtered but am not too familiar with Django
      const userNotes = pulledNotes.filter((note: { user: string | null; }) => {
        return note.user == (localStorage.getItem("username"));
      });
      setNotes(userNotes);
    });
  }, []);

  function searchQuery(event: any) {
    setSearch(event.target.value);
  }

  //Search function
  const results = !search
    ? notes
    : notes.filter(note =>
        note.body.toLowerCase().includes(search.toLocaleLowerCase())
      );

      //when a specific note is clicked set that note id to active
  const mapNotes = results.map(note => (
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
  ));

  //when the active state changes send a query to the server and display then set the activenote state
  useEffect(() => {
    Axios.get(`http://localhost:8000/api/notes/${active}`)
      .then(res => {
        setActiveNote(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [active]);

  return (
    <div className="flex">
      <section className="left-section">
        <textarea
          className="text-search"
          rows={1}
          placeholder="Search"
          onChange={searchQuery}
          value={search}
        ></textarea>
        <div className="note-list">{mapNotes}</div>
      </section>
      <section className="right-section">
        <NoteDisplay
          id={activeNote.id}
          body={activeNote.body}
          title={activeNote.title}
        />
      </section>
    </div>
  );
};

export default NotesList;
