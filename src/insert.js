const { swap } = require('../utils')

/**
 * 直接插入排序
 * @avgT O(n^2)
 * @minT O(n) 在有序列表放入尾部即可
 * @maxT O(n^2)
 * @space O(1) - 需要一个临时变量
 * @stable true 不会产生交叉插入情况
 * @param {Array} arr
 */
module.exports = function insertSort(arr) {
  const len = arr.length

  // 当前有序列表[0, i-1] 
  for (let i = 1; i < len; i++) {
    let ele = arr[i] // 变量单独赋值，不然会被后续循环污染
    let j = i - 1;

    // 取下标i, 从后向前在有序列表查找合适位置-稳定
    for (; j >= 0; j--) {
      // 如果当前位置比ele大，则挨个后移,给ele挪位置
      if (ele < arr[j]) { // 此处条件若是 <= 则排序不稳定，原因：相等还向后让出空间，则后面的跑到前面插入了
        swap(arr, j, j + 1)
      } else {
        // 当前位置元素 <= ele，符合条件，停止循环 - 稳定排序的原因
        break;
      }
    }
    arr[j] = ele
  }

  /* 以下方法是将待插入元素加入位置变换，每次都移动目标元素，类似 shell.js  */
  // // 当前有序列表[0, i-1] 
  // for (let i = 1; i < len; i++) {
  //   // 取下标i, 从后向前在有序列表查找合适位置-稳定
  //   for (let j = i - 1; j >= 0; j--) {
  //     // 如果当前位置比ele大，则挨个后移,给ele挪位置
  //     if (arr[j + 1] < arr[j]) { // 此处条件若是 <= 则排序不稳定，原因：相等还向后让出空间，则后面的跑到前面插入了
  //       swap(arr, j, j + 1)
  //     } else {
  //       // 当前位置元素 <= ele，符合条件，停止循环 - 稳定排序的原因
  //       break;
  //     }
  //   }
  // }

  return arr
}
