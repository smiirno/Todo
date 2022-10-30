import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo} from "../interfaces/interfaces";


interface TodosState {
    todos: ITodo[]
}

const initialState: TodosState = {
    todos: []
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo (state, action: PayloadAction<string>) {
            const todo = {
                id: state.todos.length,
                title: action.payload,
                isDone: false
            }
            state.todos.push(todo)
        },
        doneTodo (state, action: PayloadAction<ITodo>) {
            for (let i = 0; i < state.todos.length; i++) {
                if (state.todos[i].id === action.payload.id) {
                    state.todos[i].isDone = !state.todos[i].isDone
                }
            }
        },
        removeTodo (state, action: PayloadAction<ITodo>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        }
    }
})

export const {addTodo, doneTodo, removeTodo} = todosSlice.actions
export default todosSlice.reducer
