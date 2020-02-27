const { swap } = require('../../utils')

/**
 * 冒泡排序
 * @avgT O(n^2) : n + (n-1) + ... + 1
 * @minT O(n)
 * @maxT O(n^2)
 * @space O(1) - 需要一个临时变量
 * @param {Array} list
 */
module.exports = function bubbleSort(list) {
  let stop = false
  const len = list.length

  // 比较 len-1 趟
  for (let i = 0; i < len - 1; i++) {
    if (stop) break;
    stop = true

    // 从 [0, len - 1 - i] 中将元素冒泡至最后 
    for (let j = 0; j < len - 1 - i; j++) {
      // 因 j+1，故上述边界是 len - 1 - i
      if (list[j] > list[j + 1]) {
        stop = false
        swap(list, j, j + 1)
      }
    }
  }
  return list
}
