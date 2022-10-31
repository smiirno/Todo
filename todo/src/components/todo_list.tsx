import React from 'react';
import './todo_list.css'
import {useAppSelector} from "../store/redux";
import TodoItem from "./todo_item";
import {getFilteredTodos} from "../functions/getFilteredTodos/getFilteredTodos";

type TodoListProps = {
    type: 'all' | 'active' | 'completed'
}

const TodoList = (props: TodoListProps) => {

    const {todos} = useAppSelector(state => state.todosReducer)
    const filteredTodos = getFilteredTodos(todos, props.type)

    return (
        <div className={'container'}>
            {filteredTodos.length === 0 ?
                <div className={'helper_text'}>
                    Список задач пуст!
                </div>
                :
                filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo}/>
                })
            }
        </div>
    );
};

export default TodoList;
