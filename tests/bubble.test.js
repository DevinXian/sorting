const bubbleSort = require('../src/bubble')

describe('bubble sort', () => {
  test('just work find', () => {
    const arr = [1, 0, 4, 3, 5, 100, 2, 0, 8, -1]
    const list = bubbleSort(arr)

    expect(list[0]).toBe(-1)
    expect(list[arr.length - 1]).toBe(100)
  })
})
