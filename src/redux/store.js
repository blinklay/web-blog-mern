import { createStore } from "redux";
import { currentUserReducer } from "./currentUserReducer";

export const store = createStore(currentUserReducer)