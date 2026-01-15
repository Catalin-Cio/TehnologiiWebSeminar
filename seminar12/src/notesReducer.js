const initialState = {
  notes: [
    { id: 1, text: "Prima notiță" },
    { id: 2, text: "A doua notiță" },
    { id: 3, text: "A treia notiță" }
  ],
  loading: false
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_NOTE_REQUEST":
      return { ...state, loading: true };
    case "DELETE_NOTE_SUCCESS":
      return {
        ...state,
        loading: false,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    case "DELETE_NOTE_FAILURE":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default notesReducer;
