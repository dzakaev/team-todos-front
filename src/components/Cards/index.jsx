import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Cards = ({ categoryId }) => {
  const todos = useSelector((state) => state.todos);
  const todosByCat = todos.filter((todo) => todo.categories === categoryId);

  return (
    <div>
      {!todosByCat.length
        ? "no-todos"
        : todosByCat.map((todo) => {
            return <Card key={todo._id} todo={todo} />;
          })}
    </div>
  );
};
export default Cards;
