export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface IAddCatchTodo {
    catchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    addTodo: () => void;
}

export interface IRemoveToggleTodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}