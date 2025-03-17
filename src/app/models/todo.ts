export interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

export interface ApiResponce {
    todos:Todo[]
}