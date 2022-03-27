import React, { useState } from "react";
import { useEffect } from "react";

import "./App.css";

// components
import Header from "./header";
import TodoList from "./components/TodoList";

// hooks
import useDataManager from "./hooks/useDataManager";

function App() {
  const { todoList } = useDataManager(); // Instantiating our data manager custom hook
  const [dataAPI, setData] = useState(null);

  const fetchData = () => {
    return fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((dataAPI) => {
        setData([dataAPI]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoList todoList={todoList} />
      <h1>Bored? Refresh the page for a random activity.</h1>

      {dataAPI &&
        dataAPI.map(({ activity }) => (
          <div key={activity}>
            <ul>
              <li>
                <a href="#">
                  <h2>Try This!</h2>
                  <p>{activity}</p>
                </a>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default App;
