import { CREATE_NOTE, DELETE_NOTE, UPDATE_NOTE } from "./types";

export function createNote(note) {
  return {
    type: CREATE_NOTE,
    payload: note
  };
}

export function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    payload: note
  };
}

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    payload: { id }
  };
}
