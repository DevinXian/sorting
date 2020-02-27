const insertSort = require('../src/insert')

describe('insert sort', () => {
  test('just work find', () => {
    const arr = [1, 0, 4, 3, 5, 100, 2, 0, 8, -1]
    const list = insertSort(arr)

    expect(list[0]).toBe(-1)
    expect(list[arr.length - 1]).toBe(100)
  })
})
