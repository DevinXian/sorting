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
  // let step = Math.floor(len / 2)
  let step = len

  // 划分子序列，两个元素相隔 step
  while(step > 0) {
    // 一次跳step，参考插入排序，移动元素到合适位置
    // 两种方法： 1. 将当前元素暂存，在有序序列中找到合适位置插入（参考insert.js）
    //          2. 将当前元素加入移动，比较中不断变换位置，类似冒泡（本代码实现）
    for (let i = step; i < len; i += 1) {
      // 子序列循环，从后面向前搜索合适位置插入目标元素
      for (let j = i - step; j >= 0; j -= step) {
        if (arr[j] > arr[j + step]) {
          swap(arr, j, j + step) // 子序列中向后移动
        } else {
          break;
        }
      }
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