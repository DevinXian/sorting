const quickSort = require('../src/quick')

describe('quick sort', () => {
  test('works find when length of array is odd', () => {
    const arr = [4, 2, 100, 7, 0, 8, -1]
    const list = quickSort(arr)

    expect(list[0]).toBe(-1)
    expect(list[arr.length - 1]).toBe(100)
  })
  test('works find when length of array is even', () => {
    const arr = [4, 2, 100, 7, 0, 8, -1, 9]
    const list = quickSort(arr)

    expect(list[0]).toBe(-1)
    expect(list[arr.length - 1]).toBe(100)
  })
})
