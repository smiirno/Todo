import React from 'react';
import './filters.css'
import {Link} from "react-router-dom";
import {useAppDispatch} from "../store/redux";
import {removeCompletedTodos} from "../store/todos_slice";

const Filters = () => {

    const dispatch = useAppDispatch()

    const clickHandler = () => {
        dispatch(removeCompletedTodos())
    }

    return (
        <div className={'container filters'}>
            <Link to={''} className={'filter'}>All</Link>
            <Link to={'/active'} className={'filter'}>Active</Link>
            <Link to={'/completed'} className={'filter'}>Completed</Link>
            <button className={'filter'} onClick={clickHandler}>Clear completed</button>
        </div>
    );
};

export default Filters;
