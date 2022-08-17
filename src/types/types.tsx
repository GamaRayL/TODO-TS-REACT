import { Dispatch, SetStateAction } from "react";

export interface ITodo {
    id?: number;
    title?: string;
    content?: string;
    isTodoTitleEdit?: boolean;
    isTodoContentEdit?: boolean;
    selected?: boolean;
    completed?: boolean;
}

export interface IFunctionTodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    selectTodo: (id: number) => void;
    catchValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    addTodo?: () => void;
}

export interface IHooksStateTodo {
    setIsTodoTitleEdit: Dispatch<SetStateAction<boolean>>;
    saveEditTodoTitle: (id: number, titleValue?: string) => void;

    saveEditTodoContent: (id: number, contentValue?: string) => void;
    setIsTodoContentEdit: Dispatch<SetStateAction<boolean>>;
    setContent: Dispatch<SetStateAction<string>>;
}
