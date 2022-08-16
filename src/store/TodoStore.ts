import { defineStore } from "pinia";
import { Todo } from "../models/TodoModel"

export const useTodoStore = defineStore('todo', {
    state: () => ({
        // todos: [
        //     {
        //         id: 1,
        //         description: "Eating apples",
        //         finished: false,
        //     },
        //     {
        //         id: 2,
        //         description: "Buy bananas",
        //         finished: false,
        //     },
        //     {
        //         id: 3,
        //         description: "Harvesting cemangkas",
        //         finished: false,
        //     },
        //     {
        //         id: 4,
        //         description: "Belanja dragon fruit",
        //         finished: false,
        //     },
        // ]
        todos: [] as Todo[]
        
    }),
    getters: {
        getTodoId: (state) => {
            // state.todos
            return (todoId: number) => {
                const res = state.todos.find(o => o.id === todoId)
                if (res != undefined) {
                    return res
                }
                return {
                    id: 0,
                    description: "",
                    finished: false
                }
            }
        }
    },
    actions: {
        addTodos(todo: Todo) {
            // baru
            console.log(todo)
            if (todo.id === 0) {
                const newTodo: Todo = {
                    id: this.getMaximumId() + 1,
                    description: todo.description,
                    finished: todo.finished
                }
                // todo.id = this.getMaximumId() + 1

                this.todos.push(newTodo)
            }
            // simpan/ubah data lama
            else {
                const newTodo: Todo = {
                    id: todo.id,
                    description: todo.description,
                    finished: todo.finished
                }
                const todoIndex = this.todos.findIndex((td => td.id == todo.id))
                this.todos[todoIndex] = newTodo
                console.log('updated todo')
            }
        },
        getMaximumId() {
            if (this.todos.length > 0) {
                const maxId = Math.max(...this.todos.map(function(o) { return o.id; }))
                console.log(maxId == null ? 0 : maxId);
                return maxId == null ? 0 : maxId    
            }
            return 0
        },
        removeTodo(todo: Todo) {
            
            console.log(todo)
            const todoIndex = this.todos.findIndex((td => td.id == todo.id))
            if (todoIndex > -1) {
                this.todos.splice(todoIndex, 1);
            }
        }
    }
})