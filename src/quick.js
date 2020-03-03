const { swap } = require('../utils')

/**
 * 快速排序
 * @avgT O(nlgn) 主定理可推导 - https://www.zhihu.com/question/22393997
 * @minT O(nlgn) 推导见 avgT
 * @maxT O(n^2) 有序情况下：如 asc 时，每次基准元素总是最小元素, n + (n-1) + (n-2) ... + 1
 * @space O(lgn) - 递归调用,每一层1个变量空间，有lgn层
 * @stable false 源自于交换失序
 * @param {Array} arr
 * @param {number} start
 * @param {number} end
 */
function quickSort(arr, start, end) {
  if (typeof start === 'undefined') start = 0
  if (typeof end === 'undefined') end = arr.length - 1

  if (start >= end) return arr

  let i = start
  let j = end
  const ele = arr[start] // 基准元素

  while (true) {
    // 业务 while 循环更好理解

    // i++ 直到比基准元素大，或到达末尾 i = end
    for (; i < end && arr[i] <= ele; i++) { }
    // j-- 直到比基准元素小，或到达开头 j=start
    for (; j > start && arr[j] >= ele; j--) {}

    // 交换元素
    if (i < j) {
      swap(arr, i, j) // i < j 尚未覆盖全部数组，继续给老子动...
    } else {
      break; // i >= j 相当于交叉覆盖了全部数组，则 break
    }
  }

  swap(arr, start, j) // 交换基准元素和arr[j]

  // 基准元素在 j,则划分区间[start, j - 1] + [j] + [j + 1, end]
  quickSort(arr, start, j - 1)
  quickSort(arr, j + 1, end)

  return arr
}

module.exports = quickSort