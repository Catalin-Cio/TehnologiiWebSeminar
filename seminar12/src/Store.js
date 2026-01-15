import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // corect import named
import notesReducer from "./notesReducer";

const store = createStore(notesReducer, applyMiddleware(thunk));

export default store;
