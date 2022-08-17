import { TodoInFull } from 'components/TodoInFull';
import React, { useState, useEffect, useRef } from 'react';
import css from "./App.module.css";
import { TodoList } from './components/TodoList';
import { ITodo } from './types';


function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const [title, setTitle] = useState<string>("");
  const [isTodoTitleEdit, setIsTodoTitleEdit] = useState<boolean>(false);

  const [content, setContent] = useState<string>("");
  const [isTodoContentEdit, setIsTodoContentEdit] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // const inputRef = useRef(null);

  // Ловим значение введённое в input
  const catchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // В случае если length > 0 то добавляем значение в массив todos, иначе - "Мне за тебя написать?". + Чистим поле ввода.
  const addTodo = () => {
    title.length > 0
      ? setTodos([...todos, {
        id: new Date().getTime(),
        title: title,
        content: content,
        isTodoTitleEdit: false,
        isTodoContentEdit: false,
        selected: false,
        completed: false,
      }])
      : alert("Мне за тебя написать?");
    setTitle("");
  };

  // Удаление из массива если id элемента совпадает с id из массива
  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Сохранение состояния чекбокса в свойстве todo (пока просто присутствует)
  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map(
        todo => todo.id !== id
          ? todo
          : { ...todo, completed: !todo.completed }
      )
    );
  };

  // Присвоив todo`шке selected и на основании этого выводить её в TodoInFull
  const selectTodo = (id: number) => {
    setTodos(
      todos.map(
        todo => todo.id === id
          ? { ...todo, selected: !todo.selected }
          : { ...todo, selected: false }
      )
    );
  };

  // Изменение todo title. Передача не только id, но и state`а из компонента TodoTitle
  const saveEditTodoTitle = (id: number, titleValue?: string) => {
    setTodos(
      todos.map(
        todo => todo.id === id
          ? { ...todo, title: titleValue }
          : todo
      )
    );
    setIsTodoTitleEdit(false);
  };

  // Изменение todo content. Передача не только id, но и state`а из компонента TodoDescription
  const saveEditTodoContent = (id: number, contentValue?: string) => {
    setTodos(
      todos.map(
        todo => todo.id === id
          ? { ...todo, content: contentValue, isTodoContentEdit: !todo.isTodoContentEdit }
          : todo
      )
    );
  };

  // Отмена и очистка content`a
  const cancelEditTodoContent = (id: number) => {
    setTodos(
      todos.map(
        todo => todo.id === id
          ? { ...todo, content: "", isTodoContentEdit: !todo.isTodoContentEdit }
          : todo
      )
    );
  };

  return (
    <div className={css.app}>
      <div className={css.title}>TODO</div>
      <div className={css.box}>
        <TodoList
          todos={todos}
          title={title}
          catchValue={catchValue}
          addTodo={addTodo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          selectTodo={selectTodo}
          inputRef={inputRef}
          saveEditTodoTitle={saveEditTodoTitle}
        />
        <TodoInFull
          todos={todos}
          cancelEditTodoContent={cancelEditTodoContent}

          isTodoTitleEdit={isTodoTitleEdit}
          setIsTodoTitleEdit={setIsTodoTitleEdit}
          saveEditTodoTitle={saveEditTodoTitle}

          setContent={setContent}
          isTodoContentEdit={isTodoContentEdit}
          setIsTodoContentEdit={setIsTodoContentEdit}
          saveEditTodoContent={saveEditTodoContent} />
      </div>
    </div >
  );
}

export default App;
