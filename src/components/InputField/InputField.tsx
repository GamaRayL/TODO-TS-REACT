import React, { FC } from "react";
import { IAddCatchTodo } from "types/types";

interface IFieldProps extends IAddCatchTodo {
    value: string;
}

export const InputField: FC<IFieldProps> = ({ value, catchValue, addTodo }) => {

    const pressEnterForAddTodo: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        return e.key === "Enter" ? addTodo() : null;
    };

    return (
        <div>
            <input value={value} onChange={catchValue} onKeyDown={pressEnterForAddTodo} type="text" />
            <button onClick={addTodo}>+</button>
        </div>
    );
};