import React, { useEffect, useState } from "react";
import Axios from "axios";
import Note from "./Note/Note";
import NoteDisplay from "../NoteDisplay/NoteDisplay";

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
  const [activeNote, setActiveNote] = useState({body:"Please enter your body", title:"Please enter a title"});

  useEffect(() => {
    Axios.get("http://localhost:8000/api/notes/").then(res => {
      console.log(res.data);
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

  useEffect(()=>{
    Axios.get(`http://localhost:8000/api/notes/${active}`).then(res => {
      setActiveNote(res.data);
    });
    
  },[active])



  return (
    <>
      <textarea rows={1} placeholder="Search" onChange={searchQuery}></textarea>
      <ul>
        {notes.map(note => (
          <div
            key={note.id}
            onClick={() => {
              setActive(note.id)
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

      <NoteDisplay key={0} body={activeNote.body} title={activeNote.title} />

    </>
  );
};

export default NotesList;
