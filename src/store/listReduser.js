// const initialState = {
//   todoList: [],
// };

import { createReducer } from "@reduxjs/toolkit";
import { addList, deleteList, getList } from "./listAction";

// export const ListReduser = (state = initialState, action) => {
//   switch (action.type) {
//     case "GetList":
//       return { ...state, todoList: action.payload };

//     case "DeleteList":
//       return {
//         ...state,
//         todoList: state.todoList.filter((list) => list.id !== action.payload),
//       };

//     case "AddList":
//       return {
//         ...state,
//         todoList: [...state.todoList, { id: Date.now(), name: action.payload }],
//       };
//     default:
//       return state;
//   }
// };

const initialState = {
  todoList: [],
  name: "",
};

export const ListReduser = createReducer(initialState, (builder) => {
  builder
    .addCase(getList, (state, action) => {
      return {
        ...state,
        todoList: action.payload,
      };
    })
    .addCase(deleteList, (state, action) => {
      return {
        ...state,
        todoList: state.todoList.filter((list) => list.id !== action.payload),
      };
    })
    .addCase(addList, (state, action) => {
      return {
        ...state,
        todoList: [...state.todoList, { id: Date.now(), name: action.payload }],
      };
    });
});
