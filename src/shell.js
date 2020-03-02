const { swap } = require('../utils')

/**
 * 希尔排序：插入排序的一种改进版
 * @avgT O(n^1.25) - 网上搜的...
 * @minT 未知
 * @maxT 未知
 * @space O(1) - 需要一个临时变量
 * @stable false 源自于交换失序
 * @param {Array} arr
 */
module.exports = function shellSort(arr) {
  const len = arr.length
  let ele, j
  let step = Math.floor(len / 2)

  // 划分子序列，两个元素相隔 step
  while(step > 0) {
    // 插入排序： 插入有序队列，故从子序列第二个元素开始(0 + step)
    // 也可使用任意排序方法排序子序列，如冒泡等。
    for (let i = step; i < len; i += 1) {
      ele = arr[i]
      // 子序列循环，从后面向前搜索合适位置插入目标元素
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

/**
 * 当step大的时候，子序列元素少，排序快，交换跨度大
 * step 变小时候，子序列元素变多，但是越趋向于有序；
 * 对于有序的情况，插入排序效率很高，故而整体效率较高
 */