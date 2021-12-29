import { createLogger } from "redux-logger/src";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {  todoReducer } from "./features/todos";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const store = createStore(todoReducer, applyMiddleware(thunk, logger));

export default store;
