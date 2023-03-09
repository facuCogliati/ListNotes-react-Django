import React from "react";
import { Link } from "react-router-dom";

let getTitle = (note) => {
  let title = note.content.split("\n")[0];
  if (title.length > 45) {
    return title.slice(0, 45);
  }
  return title;
};

let getTime = (note) => {
  return new Date(note.update).toLocaleDateString();
};

let getContent = (note) => {
  let title = getTime(note);
  let content = note.content.replaceAll("\n", "");
  content = content.replaceAll(title, "");

  if (content.length > 45) {
    return content.slice(0, 45) + "...";
  }
  return content;
};

const ListNotes = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{getTitle(note)}</h3>
        <p>
          <span>{getTime(note)}</span>
          <small>{getContent(note)}</small>
        </p>
      </div>
    </Link>
  );
};

export default ListNotes;
