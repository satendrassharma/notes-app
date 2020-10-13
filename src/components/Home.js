import React from "react";
import { createNote, deleteNote } from "../actions/noteActions";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const { notes } = useSelector(({ notes: { notes } }) => ({ notes }));
  const createNewNote = e => {
    console.log("new note created");
    const note = {
      id: uuidv4(),
      body: "this is body",
      title: "new note",
      time: Date.now()
    };

    dispatch(createNote(note));
  };

  const handleDelete = id => {
    dispatch(deleteNote(id));
  };
  return (
    <div className="notes">
      <div className="note">
        <button onClick={createNewNote} className="create_button">
          +
        </button>
      </div>

      {notes.map(note => (
        <div className="note" key={note.id}>
          <Link to={`/${note.id}`}>
            <div>{note.title}</div>
          </Link>
          <button onClick={() => handleDelete(note.id)} className="delete_note">
            x
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
