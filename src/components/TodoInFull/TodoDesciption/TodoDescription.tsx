import { Button } from "components/common/Button";
import { useState } from "react";
import { ITodo, IHooksStateTodo } from "types";
import css from "./TodoDescription.module.css";

interface ITodoDescriptionProps extends ITodo, IHooksStateTodo {
    cancelEditTodoContent: (id: number) => void;
}

export const TodoDescription = (props: ITodoDescriptionProps) => {
    const { saveEditTodoContent, cancelEditTodoContent, isTodoContentEdit, id, content } = props;
    const [contentValue, setContentValue] = useState(content);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContentValue(e.target.value);
    };

    const handleClick = () => {
        cancelEditTodoContent(id as number);
        setContentValue("");
    };

    const showContent = () => {
        if (isTodoContentEdit)
            return <>
                <textarea value={contentValue} className={css.textarea} onChange={handleChange} cols={30} rows={10}></textarea>
                <Button type="button" onClick={() => saveEditTodoContent(id as number, contentValue as string)}>Сохранить</Button>
                <Button type="button" buttonStyle="btn--primary--text" onClick={() => handleClick()}>Отмена</Button>
            </>;
        else
            return <>
                <p onClick={() => saveEditTodoContent(id as number)} className={css.content}>{content}</p>
            </>;
    };

    return (
        <div className={css.description}>
            <h3 className={css.title}>Описание</h3>
            {showContent()}
        </div>
    );
};