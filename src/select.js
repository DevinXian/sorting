const { swap } = require('../utils')

/**
 * 选择排序
 * @avgT O(n^2)
 * @minT O(n^2)
 * @maxT O(n^2)
 * @space O(1) - 需要一个临时变量
 * @stable false 源自于交换失序
 * @param {Array} arr
 */
module.exports = function selectSort(arr) {
  const len = arr.length 

  // 当前循环安置下标为i 
  for (let i = 0; i < len - 1; i++) {
    // 从下标 i+1 遍历到最后 len-1，不断比较交换，选出最大的
    for(let j = i + 1; j <= len - 1; j++) {
      if (arr[j] < arr[i]) {
        swap(arr, i, j)
      }
    }
  }

  return arr
}
