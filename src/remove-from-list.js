function removeKFromList(l, k) {
  let current = l;

  // Переместимся в начало списка, пропуская все элементы со значением k
  while (current !== null && current.value === k) {
    current = current.next;
  }

  l = current;

  // Пройдем по оставшимся элементам списка и удалим те, у которых значение равно k
  while (current !== null) {
    while (current.next !== null && current.next.value === k) {
      current.next = current.next.next;
    }
    current = current.next;
  }

  return l;
}

module.exports = {
  removeKFromList
};
