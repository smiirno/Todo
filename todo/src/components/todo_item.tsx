import React, {useState} from 'react';
import {ITodo} from "../interfaces/interfaces";
import './todo_item.css'
import {useAppDispatch} from "../store/redux";
import {doneTodo, removeTodo} from "../store/todos_slice";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


type TodoItemProps = {
    todo: ITodo
}

const TodoItem = (props: TodoItemProps) => {

    const dispatch = useAppDispatch()

    const checkboxHandler = () => {
        dispatch(doneTodo(props.todo))
    }

    const removeBtnHandler = () => {
        dispatch(removeTodo(props.todo))
    }

    return (
        <div className={'todo_item'}>
            <div className={'title'}>
                <input type={'checkbox'} onClick={checkboxHandler} defaultChecked={props.todo.isDone}/>
                <h3 className={props.todo.isDone ? 'done_todo' : ''}>{props.todo.title}</h3>
            </div>
            <CloseOutlinedIcon onClick={removeBtnHandler} className={'close_btn'}/>
        </div>
    );
};

export default TodoItem;
