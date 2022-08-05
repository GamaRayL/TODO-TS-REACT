import React, { useState } from 'react';
import css from "./App.module.css";
import { TodoList } from './components/TodoList';
import { ITodo } from './types';

function App() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  // const inputRef = useRef(null);

  // Ловим значение введённое в input
  const catchValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  // В случае если length > 0 то добавляем значение в массив todos, иначе - "Мне за тебя написать?". + Чистим поле ввода.
  const addTodo = () => {
    value.length > 0
      ? setTodos([...todos, {
        id: new Date().getTime(),
        title: value,
        completed: false,
      }])
      : alert("Мне за тебя написать?");
    setValue("");
  };


  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map(
        todo => todo.id !== id
          ? todo
          : { ...todo, completed: !todo.completed }));
  };


  return (
    <div className={css.app}>
      <div className={css.title}>TODO</div>
      <div className={css.box}>
        <div className={css.todoList}>
          <TodoList
            todos={todos}
            value={value}
            catchValue={catchValue}
            addTodo={addTodo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </div>
        <div className={css.todoItem}>
          -
        </div>
      </div>
    </div>
  );
}

export default App;
