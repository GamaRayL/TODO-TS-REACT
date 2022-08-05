import { FC } from "react";
import { InputField } from "components/InputField";
import { TodoItem } from "components/TodoItem";
import { IAddCatchTodo, IRemoveToggleTodo, ITodo } from "types";

interface ITodoListProps extends IAddCatchTodo, IRemoveToggleTodo {
    todos: ITodo[];
    value: string;
}

export const TodoList: FC<ITodoListProps> = ({ todos, value, catchValue, addTodo, removeTodo, toggleTodo }) => {
    return (
        <div>
            <InputField value={value} catchValue={catchValue} addTodo={addTodo} />
            {
                todos.map(todo =>
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                    />
                )}
        </div>
    );
};