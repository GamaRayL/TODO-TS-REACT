import { Input } from "components/common/Input";
import { useState } from "react";
import { IFunctionTodo, ITodo } from "types";
import css from "./TodoItem.module.css";

interface ITodoItem extends ITodo, IFunctionTodo {
  saveEditTodoTitle: (id: number, todoValue?: string) => void;
}

export const TodoItem = (props: ITodoItem) => {
  const { id, title, completed, removeTodo, toggleTodo, selectTodo, saveEditTodoTitle } = props;
  const [isEditTitleInsideItem, setIsEditTitleInsideItem] = useState<boolean>(true);


  const pressEnterForEdit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      saveEditTodoTitle(id as number);
      setIsEditTitleInsideItem(true);
    }
  };

  return (
    <div className={css.todoItem}>
      {isEditTitleInsideItem
        ? <div className={css.box}>
          <div className={css.wrap}>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id as number)} />
            <p className={css.title} onClick={() => selectTodo(id as number)}>{title}</p>
          </div>
          <svg onClick={() => removeTodo(id as number)} className={css.itemIcon} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#6d6d6d">
            <path d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" />
          </svg>
        </div>
        : <Input onKeyDown={pressEnterForEdit} type="text" />
      }
    </div >
  );
};
