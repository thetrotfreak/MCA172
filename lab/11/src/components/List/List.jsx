import React from "react";
import { useData } from "../../context/DataContext";

const List = ({ lists, setData }) => {
  const { data } = useData();
  console.log(lists, data.todoName);
  return (
    <ul>
      {lists.map((list) => {
        return (
          <li key={list}>
            {list}
            <button
              onClick={(e) => {
                console.log("clicking");
                setData({ type: "UPDATE_TODO", todoName: list, payload: list });
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                setData({ type: "DELETE_TODO", payload: list });
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
