import React from 'react';
import './filters.css'
import {Link} from "react-router-dom";
import {useAppDispatch} from "../store/redux";
import {removeCompletedTodos} from "../store/todos_slice";


const Filters = () => {

    const dispatch = useAppDispatch()

    document.getElementById('id')

    const clickHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const linkAll = document.getElementById('all')
        const linkActive = document.getElementById('active')
        const linkCompleted = document.getElementById('completed')
        const currentLink = document.getElementById(event.currentTarget.id)
        if (currentLink && linkAll && linkActive && linkCompleted) {
            switch (currentLink) {
                case linkAll:
                    currentLink.classList.add('active')
                    linkActive.classList.remove('active')
                    linkCompleted.classList.remove('active')
                    break;
                case linkActive:
                    currentLink.classList.add('active')
                    linkAll.classList.remove('active')
                    linkCompleted.classList.remove('active')
                    break;
                case linkCompleted:
                    currentLink.classList.add('active')
                    linkActive.classList.remove('active')
                    linkAll.classList.remove('active')
            }
        }
    }

    const removeHandler = () => {
        dispatch(removeCompletedTodos())
    }

    return (
        <div className={'container filters'}>
            <div>
                <Link to={''} className={'filter active'} id={'all'} onClick={event => clickHandler(event)}>All</Link>
                <Link to={'/active'} className={'filter'} id={'active'} onClick={event => clickHandler(event)}>Active</Link>
                <Link to={'/completed'} className={'filter'} id={'completed'} onClick={event => clickHandler(event)}>Completed</Link>
            </div>
            <button className={'filter'} onClick={removeHandler}>Clear completed</button>
        </div>
    );
};

export default Filters;
