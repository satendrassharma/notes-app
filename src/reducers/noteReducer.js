import { CREATE_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../actions/types";

const initialState = {
  notes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.payload.id) {
            return { ...note, ...action.payload };
          }
          return note;
        })
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload.id)
      };
    default:
      return state;
  }
}
