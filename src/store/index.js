// import { applyMiddleware, createStore } from "redux";
// import { ListReduser } from "./listReduser";
// import { thunk } from "redux-thunk";
import { Tuple, configureStore } from "@reduxjs/toolkit";
import { ListReduser } from "./listReduser";
// import logger from "redux-logger";
import { thunk } from "redux-thunk";

// export const store = createStore(ListReduser, applyMiddleware(thunk));

export const store = configureStore({
  reducer: {
    todoList: ListReduser,
  },
  middleware: () => new Tuple(thunk),
});
