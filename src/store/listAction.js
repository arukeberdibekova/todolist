import { createAction } from "@reduxjs/toolkit";

export const getList = createAction("GetList");

export const deleteList = createAction("DeleteList")

export const addList = createAction("AddList")

export const listAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const fetchData = await response.json();

      dispatch(getList(fetchData));
    } catch (error) {
      console.log(error.message);
    }
  };
};

// export const getList = (list) => ({
//   type: "GetList",
//   payload: list,
// });

// export const deleteList = (id) => ({
//   type: "DeleteList",
//   payload: id,
// });
