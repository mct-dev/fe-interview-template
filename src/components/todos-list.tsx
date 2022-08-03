import React from "react";

export interface Todo {
  id: string;
  userId: string;
  title: string;
}

interface TodosListProps {
  id: string;
  data: Todo[];
  setTodo: (id: number) => void;
}

export const TodosList = (props: TodosListProps) => {
  return (
    <div className="flex flex-col items-center max-h-56 overflow-y-scroll">
      {props.data.map((v, index) => (
        <div
          key={index}
          className="p-4 shadow w-1/2 bg-white my-4 cursor-pointer"
        >
          <h4 onClick={() => props.setTodo(index)}>{v.title}</h4>
        </div>
      ))}
    </div>
  );
};
