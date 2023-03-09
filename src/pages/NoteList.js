import React, { useEffect, useState } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// En este version de router no esta match-history-location

const NoteList = ({ match, history }) => {
  // let noteId = useParams()
  let noteId = match.params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    if (noteId == "create") return;

    let resp = await fetch(`/api/${noteId}`);
    let data = await resp.json();
    setNote(data);
  };

  let updateNote = async () => {
    fetch(`/api/${noteId}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let creatNote = async () => {
    if (!note || note.content == "") return history.push("/");
    fetch(`/api/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    history.push("/");
  };

  let deleteNote = async () => {
    fetch(`/api/${noteId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.push("/");
  };

  let handleSubmit = () => {
    if (noteId == "create") {
      creatNote();
    } else if (note.content == "" && noteId != "create") {
      deleteNote();
    } else if (noteId !== "create") {
      updateNote();
    }
    history.push("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {noteId !== "create" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        value={note?.content}
        onChange={(e) => {
          setNote({ ...note, content: e.target.value });
        }}
      ></textarea>
    </div>
  );
};

export default NoteList;
