import React, { useEffect, useState } from "react";
import ListNotes from "../components/ListNotes";
import AddIcon from "../components/AddButtom";

const NotesList = () => {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let res = await fetch("/api/");
    let data = await res.json();
    setNotes(data);
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>

      <div className="notes-list">
        {notes.map((note) => (
          <ListNotes key={note.id} note={note} />
        ))}
      </div>
      <AddIcon />
    </div>
  );
};

export default NotesList;
