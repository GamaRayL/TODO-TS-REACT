import { Button } from "components/common/Button";
import { Input } from "components/common/Input";
import { TodoItem } from "components/TodoItem";
import { IFunctionTodo, ITodo } from "types";
import css from "./TodoList.module.css";

interface ITodoListProps extends IFunctionTodo, ITodo {
    todos: ITodo[];
    inputRef: React.RefObject<HTMLInputElement>;
    saveEditTodoTitle: (id: number, todoValue?: string) => void;
}

export const TodoList = (props: ITodoListProps) => {
    const {
        todos,
        title,
        inputRef,
        catchValue,
        addTodo,
        removeTodo,
        toggleTodo,
        selectTodo,
        saveEditTodoTitle,
    } = props;

    const pressEnterForAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
        return e.key === "Enter" ? addTodo?.() : null;
    };

    return (
        <div className={css.todoList}>
            <div className={css.wrapForField}>
                <Input
                    value={title}
                    title={title}
                    inputRef={inputRef}
                    onChange={catchValue}
                    onKeyDown={pressEnterForAddTodo}
                    placeholder="Ввести заголовок для этой задачи"
                />
                <Button type="button" buttonStyle="btn--primary--outlined" onClick={addTodo}>+</Button>
            </div>
            <div>
                {
                    todos.map(todo =>
                        <TodoItem
                            {...todo}
                            key={todo.id}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            selectTodo={selectTodo}
                            saveEditTodoTitle={saveEditTodoTitle}
                        />
                    )}
            </div>
        </div>
    );
};