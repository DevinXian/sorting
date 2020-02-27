exports.swap = function swap(list, a, b) {
  const tmp = list[a]
  list[a] = list[b]
  list[b] = tmp
}

