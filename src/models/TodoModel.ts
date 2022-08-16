export interface Todo {
    id: number,
    description: string,
    finished: boolean
}

export interface InitializeTodo extends Todo {
    id: 0,
    description: "",
    finished: false
}