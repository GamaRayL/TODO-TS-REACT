import { Button } from "components/common/Button";
import { Input } from "components/common/Input";
import { useState } from "react";
import { IHooksStateTodo, ITodo } from "types";
import css from "./TodoTitle.module.css";

interface ITodoTitleProps extends IHooksStateTodo, ITodo {
}

export const TodoTitle = (props: ITodoTitleProps) => {
    const { saveEditTodoTitle, isTodoTitleEdit, setIsTodoTitleEdit, title, id } = props;
    const [titleValue, setTitleValue] = useState(title);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleValue(e.target.value);
    };

    const pressEnterForEdit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            saveEditTodoTitle(id as number, titleValue as string);
        }
    };


    const showTitle = () => {
        if (isTodoTitleEdit)
            return <Input value={titleValue} onChange={handleChange} type="text" onKeyDown={pressEnterForEdit} />;
        else
            return <span onClick={() => setIsTodoTitleEdit(true)}>{title}</span>;
    };

    return (
        <div className={css.TodoTitle}>
            {showTitle()}
        </div >
    );
};