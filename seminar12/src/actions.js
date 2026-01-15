import { deleteNoteAPI } from "./api";

export const deleteNoteAsync = (id) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_NOTE_REQUEST" });
    try {
      await deleteNoteAPI(id);
      dispatch({ type: "DELETE_NOTE_SUCCESS", payload: id });
    } catch (error) {
      dispatch({ type: "DELETE_NOTE_FAILURE" });
    }
  };
};
