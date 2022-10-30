import React, {useEffect, useState} from 'react';
import './todo_form.css'
import {useAppDispatch} from "../store/redux";
import {addTodo} from "../store/todos_slice";


const TodoForm = () => {

    const dispatch = useAppDispatch()

    const [currentValue, setCurrentValue] = useState<string>('');
    const [disableBtn, setDisableBtn] = useState<boolean>(true);

    useEffect(() => {
        if (currentValue !== '') {
            setDisableBtn(false)
        } else {
            setDisableBtn(true)
        }
    }, [currentValue])


    const changeHandler = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.currentTarget.value)
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(addTodo(currentValue))
        setCurrentValue('')
    }

    return (
        <div className={'container'}>
            <form className={' todo_form'} onSubmit={event => submitHandler(event)}>
                <input type={'text'} onChange={event => changeHandler(event)} value={currentValue} placeholder={'Введите задачу'}/>
                <button type={'submit'} disabled={disableBtn} className={disableBtn ? 'disabled_btn' : ''}>Добавить</button>
            </form>
        </div>
    );
};

export default TodoForm;
