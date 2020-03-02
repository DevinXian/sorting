const { swap } = require('../utils')

/**
 * 希尔排序：插入排序的一种改进版
 * @avgT O(n^2)
 * @minT O(n^2)
 * @maxT O(n^2)
 * @space O(1) - 需要一个临时变量
 * @stable false 源自于交换失序
 * @param {Array} arr
 */
module.exports = function shellSort(arr) {
  const len = arr.length
  let ele, j
  let step = Math.floor(len / 2)

  while(step > 0) {
    // 插入排序
    // 从子序列第二个元素开始(0 + step)
    for (let i = step; i < len; i += 1) {
      ele = arr[i]
      // 子序列循环
      for (j = i - step; j >= 0; j -= step) {
        if (arr[j] > ele) {
          swap(arr, j, j + step) // 子序列中向后移动
        } else {
          break;
        }
      }
      arr[j + step] = ele
    }
    step = Math.floor(step / 2);
  }

  return arr
}