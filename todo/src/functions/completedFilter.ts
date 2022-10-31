import {ITodo} from "../interfaces/interfaces";

export function completedFilter (todos: ITodo[]) {
    return todos.filter(todo => todo.isDone)
}