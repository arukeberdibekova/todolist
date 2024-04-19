import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../store/listAction";

const AddList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const changeHandle = (event) => {
    setValue(event.target.value);
  };
  const addHandle = () => {
    if (value.trim() !== "") {
        dispatch(addList(value));
    }
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={changeHandle}
        placeholder="введите"
      />
      <button onClick={addHandle}>ADD</button>
    </div>
  );
};

export default AddList;
