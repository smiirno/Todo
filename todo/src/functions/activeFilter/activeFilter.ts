import {ITodo} from "../../interfaces/interfaces";

export function activeFilter (todos: ITodo[]) {
    return todos.filter(todo => !todo.isDone)
}