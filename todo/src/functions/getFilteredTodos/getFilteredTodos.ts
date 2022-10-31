import {ITodo} from "../../interfaces/interfaces";
import {activeFilter} from "../activeFilter/activeFilter";
import {completedFilter} from "../completedFilter/completedFilter";

export function getFilteredTodos (todos: ITodo[], type: 'all' | 'active' | 'completed') {
    let filteredTodos: ITodo[] = []
    switch (type) {
        case "all":
            filteredTodos = todos;
            break;
        case "active":
            filteredTodos = activeFilter(todos);
            break;
        case "completed":
            filteredTodos = completedFilter(todos);
            break;
    }
    return filteredTodos
}