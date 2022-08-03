import React from "react";
import { TodosList, Todo } from "./todos-list";

interface TodosSectionProps {}

export const TodosSection = (props: TodosSectionProps) => {
  const [currentId, setId] = React.useState<number>();
  const [todos, setTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos/${currentId ? currentId : ""}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodos(json);
      });
  }, []);

  return (
    <div>
      <TodosList
        id="todos-list"
        data={todos}
        setTodo={(id) => {
          console.log("setting id:", id);
          setId(id);
        }}
      />
    </div>
  );
};
