import React from "react";

const Task = ({ task }) => {
  return (
    <div>
      <ul>
        <li>
          <a href="#">
            <h2>TODO</h2>
            <p>{task.event}</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Task;
