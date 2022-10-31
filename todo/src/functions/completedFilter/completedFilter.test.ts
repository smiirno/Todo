import {completedFilter} from "./completedFilter";


describe('Тесты completedFilter', () => {
    test('Корректное значение', () => {
        expect(completedFilter([{id: 0, title: '', isDone: true}])).toStrictEqual([{id: 0, title: '', isDone: true}])
    })
    test('Некорректное значение', () => {
        expect(completedFilter([{id: 0, title: '', isDone: false}])).toStrictEqual([])
    })
    test('Пустой массив', () => {
        expect(completedFilter([])).toStrictEqual([])
    })
    test('Полный массив', () => {
        expect(completedFilter([{id: 0, title: '', isDone: true}, {id: 1, title: '', isDone: false}])).toStrictEqual([{id: 0, title: '', isDone: true}])
    })
})