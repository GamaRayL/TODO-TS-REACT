import { FC } from "react";
import { IRemoveToggleTodo, ITodo } from "types";

interface ITodoItem extends ITodo, IRemoveToggleTodo { }

export const TodoItem: FC<ITodoItem> = ({ id, title, completed, removeTodo, toggleTodo }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
      <div>{title}</div>
      <button onClick={() => removeTodo(id)}>x</button>
    </div>
  );
};