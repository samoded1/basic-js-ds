class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    return this.elements.pop();
  }

  peek() {
    return this.elements.length > 0 ? this.elements[this.elements.length - 1] : undefined;
  }
}

module.exports = {
  Stack
};
