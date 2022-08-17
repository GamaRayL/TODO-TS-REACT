import { IHooksStateTodo, ITodo } from "types";
import { TodoDescription } from "./TodoDesciption";
import css from "./TodoInFull.module.css";
import { TodoTitle } from "./TodoTitle";

interface ITodoInFull extends IHooksStateTodo, ITodo {
    todos: ITodo[];
    isTodoTitleEdit: boolean;
    isTodoContentEdit: boolean;
    cancelEditTodoContent: (id: number) => void;
}

export const TodoInFull = (props: ITodoInFull) => {


    return (
        <div className={css.todoInFull}>
            {
                props.todos.map(todo =>
                    todo.selected
                        ? <div key={todo.id} >
                            <TodoTitle {...props} title={todo.title as string} id={todo.id} />
                            <TodoDescription {...props} content={todo.content as string} id={todo.id} isTodoContentEdit={todo.isTodoContentEdit} />
                        </div >
                        : null
                )}
        </div>
    );
};