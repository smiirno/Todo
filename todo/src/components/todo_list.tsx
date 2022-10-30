import React from 'react';
import './todo_list.css'
import {useAppSelector} from "../store/redux";
import TodoItem from "./todo_item";


const TodoList = () => {

    const {todos} = useAppSelector(state => state.todosReducer)

    return (
        <div className={'container'}>
            {todos.length === 0 ?
                <div className={'helper_text'}>
                    Добавьте свою первую задачу!
                </div>
                :
                todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo}/>
                })
            }
        </div>
    );
};

export default TodoList;
