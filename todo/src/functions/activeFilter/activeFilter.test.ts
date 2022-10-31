import {activeFilter} from "./activeFilter";

describe('Тесты activeFilter', () => {
    test('Корректное значение', () => {
        expect(activeFilter([{id: 0, title: '', isDone: false}])).toStrictEqual([{id: 0, title: '', isDone: false}])
    })
    test('Некорректное значение', () => {
        expect(activeFilter([{id: 0, title: '', isDone: true}])).toStrictEqual([])
    })
    test('Пустой массив', () => {
        expect(activeFilter([])).toStrictEqual([])
    })
    test('Полный массив', () => {
        expect(activeFilter([{id: 0, title: '', isDone: true}, {id: 1, title: '', isDone: false}])).toStrictEqual([{id: 1, title: '', isDone: false}])
    })
})