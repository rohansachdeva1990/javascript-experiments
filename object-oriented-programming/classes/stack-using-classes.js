// Implement Stack using Classes

// Private methods
const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(items) {
    const item = _items.get(this);
    items.push(item);
  }

  pop() {
    const items = _items.get(this);

    if (items.length === 0) {
      throw new Error('Stack underflow');
    }

    return items.pop();
  }

  peek() {
    const items = _items.get(this);

    if (items.length === 0) {
      throw new Error('Stack underflow');
    }
    return items[items.length - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}
