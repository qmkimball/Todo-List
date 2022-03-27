import React from "react";

import Task from "./Task";

const TodoList = ({ todoList }) => {
  return (
    <div className="todo-list">
      {todoList.map((task, idx) => {
        return <Task key={idx} task={task} />;
      })}
    </div>
  );
};

export default TodoList;
