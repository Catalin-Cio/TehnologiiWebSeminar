import React from "react";
import { useSelector, useDispatch } from "react-redux";

const NotesList = () => {
  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_NOTE", payload: id });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lista Notițelor</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {notes.map(note => (
          <li key={note.id} style={{ marginBottom: "10px" }}>
            {note.text}{" "}
            <button onClick={() => handleDelete(note.id)}>Șterge</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
