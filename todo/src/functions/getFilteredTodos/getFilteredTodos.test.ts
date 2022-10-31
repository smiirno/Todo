import {getFilteredTodos} from "./getFilteredTodos";
import {activeFilter} from "../activeFilter/activeFilter";
import {completedFilter} from "../completedFilter/completedFilter";

const todos = [
    {id: 0, title: 'a', isDone: false},
    {id: 1, title: 'b', isDone: false},
    {id: 2, title: 'c', isDone: true},
    {id: 3, title: 'd', isDone: false},
    {id: 4, title: 'e', isDone: true},
    {id: 5, title: 'f', isDone: false},
]

describe('Тесты getFilteredTodos', () => {
    test('Корректное значение all', () => {
        expect(getFilteredTodos([{id: 0, title: '', isDone: false}], 'all')).toStrictEqual([{id: 0, title: '', isDone: false}])
    })
    test('Корректное значение active', () => {
        expect(getFilteredTodos([{id: 0, title: '', isDone: false}], 'active')).toStrictEqual(activeFilter([{id: 0, title: '', isDone: false}]))
    })
    test('Корректное значение completed', () => {
        expect(getFilteredTodos([{id: 0, title: '', isDone: true}], 'completed')).toStrictEqual(completedFilter([{id: 0, title: '', isDone: true}]))
    })
    test('Полный массив all', () => {
        expect(getFilteredTodos(todos, 'all')).toStrictEqual(todos)
    })
    test('Полный массив active', () => {
        expect(getFilteredTodos(todos, 'active')).toStrictEqual(activeFilter(todos))
    })
    test('Полный массив completed', () => {
        expect(getFilteredTodos(todos, 'completed')).toStrictEqual(completedFilter(todos))
    })
})