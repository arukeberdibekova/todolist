import React, { useEffect } from "react";
import { deleteList, listAction } from "../store/listAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";

const GetList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAction());
  }, [dispatch]);
  const { todoList } = useSelector((state) => state.todoList);
  // console.log(list);
  const [modalOpen, setModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const openModal = (todo) => {
    setTodoToDelete(todo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setTodoToDelete(null);
    setModalOpen(false);
  };
  console.log(todoToDelete);
  const handleDelete = () => {
    dispatch(deleteList(todoToDelete));
    closeModal();
  };
  // const deleteList = (id) => {
  //   dispatch({ type: "DeleteList", payload: id });
  //   console.log(id);
  // };
  // console.log(list);
  return (
    <div>
      {/* {list.map((element, index) => (
        <Div key={index}>
          {element.name}
          <button onClick={() => deleteList(element.id)}>delete</button>
        </Div>
      ))} */}

      <ul>
        {todoList?.map((element) => (
          <Li key={element.id}>
            {element.name}
            <button onClick={() => openModal(element.id)}>Delete</button>
          </Li>
        ))}
      </ul>
      {modalOpen && (
        <div>
          <div>
            <h3>Вы действительно хотите удалить это ?</h3>
            <button onClick={handleDelete}>Да</button>
            <button onClick={closeModal}>Нет</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetList;

const Li = styled.li`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-left: 600px;
`;
