import React from "react";
import Task from "./Task";

const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((task) => {
        return <Task task={task} />;
      })}
    </div>
  );
};

export default TodoList;
