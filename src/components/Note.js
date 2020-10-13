import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";
import { deleteNote, updateNote } from "../actions/noteActions";
import ReactMarkdown from "react-markdown";
import { formatDistance } from "date-fns";

function Note() {
  const match = useRouteMatch();
  const history = useHistory();
  const { storenote } = useSelector(store => {
    return {
      storenote: store.notes.notes.find(note => note.id === match.params.id)
    };
  });
  const [note, setNote] = useState(storenote?.body || "");
  const [isSave, setIsSave] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [title, setTitle] = useState(storenote?.title || "");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("mounted");
    return () => {
      dispatch(updateNote({ id: match.params.id, body: note, title }));
    };
  }, [dispatch, match.params.id, note, title]);

  const handleNote = e => {
    setNote(e.target.value);
  };
  const handleSave = e => {
    dispatch(updateNote({ id: match.params.id, body: note, title }));
    setIsSave(true);
    setIsEdit(false);
  };

  const handleDelete = e => {
    dispatch(deleteNote(match.params.id));
    history.push("/");
  };
  const handleEdit = e => {
    console.log("handle edit");
    setIsEdit(true);
    setIsSave(false);
  };

  const handleTitle = e => {
    setTitle(e.target.value);
  };

  return (
    <div className="note_page">
      <div className="form">
        <input
          type="text"
          className="title"
          onChange={handleTitle}
          value={title}
        />
        <p className="time">
          created {formatDistance(new Date(storenote.time), new Date())} ago
        </p>
        <div className="buttons">
          {!isEdit && (
            <span className="material-icons edit" onClick={handleEdit}>
              edit
            </span>
          )}
          {!isSave && (
            <span className="material-icons save" onClick={handleSave}>
              save
            </span>
          )}

          <span className="material-icons delete" onClick={handleDelete}>
            delete
          </span>
        </div>
      </div>

      <div className="editor">
        {isEdit && <textarea onChange={handleNote} value={note}></textarea>}
        {isSave && <ReactMarkdown source={note} />}
      </div>
    </div>
  );
}

export default Note;
