import React from "react";
import { useData } from "../../context/DataContext";
import List from "../List/List";

const Main = () => {
  const { data, setData } = useData();
  console.log(data.todoName);
  console.log(data);
  return (
    <div>
      <input
        type="text"
        value={data.todoName}
        onChange={(e) =>
          setData({ type: "NAME_TODO", payload: e.target.value })
        }
      />
      <button
        onClick={(e) => {
          setData({ type: "ADD_TODO", payload: data.todoName });
          setData({ type: "NAME_TODO", payload: " " });
        }}
      >
        Add Todo
      </button>

      <div>
        <List lists={data.todo} setData={setData} />
      </div>
    </div>
  );
};

export default Main;
