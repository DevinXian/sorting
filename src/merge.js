/**
 * 归并排序 - 分解 + 合并
 * @avgT O(nlgn) 
 * @minT O(nlgn) 
 * @maxT O(nlgn) 
 * @space O(n)-需要一个长度n的临时数组
 * @stable true 稳定排序 - 不存在相同元素的顺序
 * @param {Array} arr
 * @param {number} start
 * @param {number} end
 */
function mergeSort(arr, start, end) {
  if (typeof start === 'undefined') start = 0
  if (typeof end === 'undefined') end = arr.length - 1

  // 终止条件 - 剩一个元素，则函数不断向外层堆栈迭代
  if (start >= end) return arr

  // 分 - 函数堆栈深入一层，分两边进行
  const mid = Math.floor((start + end) / 2)
  mergeSort(arr, start, mid)
  mergeSort(arr, mid + 1, end)

  // 合 - 随着函数执行栈变浅，每次都合并；到最外层则数组全部有序
  return merge(arr, start, mid, end)
}

// 合并有序数组
function merge(list, left, mid, right) {
  const temp = []
  let i = left
  let j = mid + 1

  while (i <= mid && j <= right) {
    temp.push(list[i] <= list[j] ? list[i++] : list[j++])
  }
  while (i <= mid) {
    temp.push(list[i++])
  }
  while (j <= right) {
    temp.push(list[j++])
  }

  let t = 0
  // 更改arr
  while (left <= right) {
    list[left++] = temp[t++]
  }
  return list
}

module.exports = mergeSort