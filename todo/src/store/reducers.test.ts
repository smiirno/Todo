import {addTodo, doneTodo, removeCompletedTodos, removeTodo} from "./todos_slice";
import todosReducer from './todos_slice'
import {ITodo} from "../interfaces/interfaces";


const todos:ITodo[] = [
    {id: 0, title: 'a', isDone: false},
    {id: 1, title: 'b', isDone: false},
    {id: 2, title: 'c', isDone: true},
    {id: 3, title: 'd', isDone: false},
    {id: 4, title: 'e', isDone: true},
    {id: 5, title: 'f', isDone: false},
]

describe('Тесты reducer', () => {
    test('addTodo', () => {
        expect(todosReducer({todos: todos}, addTodo('test'))).toStrictEqual({
            todos: [
                {id: 0, title: 'a', isDone: false},
                {id: 1, title: 'b', isDone: false},
                {id: 2, title: 'c', isDone: true},
                {id: 3, title: 'd', isDone: false},
                {id: 4, title: 'e', isDone: true},
                {id: 5, title: 'f', isDone: false},
                {id: 6, title: 'test', isDone: false}
            ]
        })
    })
    test('doneTodo', () => {
        expect(todosReducer({todos: todos}, doneTodo({id: 1, title: 'b', isDone: false}))).toStrictEqual({
            todos: [
                {id: 0, title: 'a', isDone: false},
                {id: 1, title: 'b', isDone: true},
                {id: 2, title: 'c', isDone: true},
                {id: 3, title: 'd', isDone: false},
                {id: 4, title: 'e', isDone: true},
                {id: 5, title: 'f', isDone: false},
            ]
        })
    })
    test('removeTodo', () => {
        expect(todosReducer({todos: todos}, removeTodo({id: 1, title: 'b', isDone: false}))).toStrictEqual({
            todos: [
                {id: 0, title: 'a', isDone: false},
                {id: 2, title: 'c', isDone: true},
                {id: 3, title: 'd', isDone: false},
                {id: 4, title: 'e', isDone: true},
                {id: 5, title: 'f', isDone: false},
            ]
        })
    })
    test('removeCompletedTodos', () => {
        expect(todosReducer({todos: todos}, removeCompletedTodos())).toStrictEqual({
            todos: [
                {id: 0, title: 'a', isDone: false},
                {id: 1, title: 'b', isDone: false},
                {id: 3, title: 'd', isDone: false},
                {id: 5, title: 'f', isDone: false},
            ]
        })
    })
})