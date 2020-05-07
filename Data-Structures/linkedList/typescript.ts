/** 链表
 * 包含方法：
 *  - push(): 队列是否为空
 *  - getElementAt()： 队列元素个数
 *  - insert()：入队
 *  - removeAt()：出队
 *  - remove()：输出队列中数据
 *  - indexOf()：返回队列中第一个元素
 *  - isEmpty()：输出队列中数据
 *  - size()：返回队列中第一个元素
 *  - getHead()：输出队列中数据
 *  - clear()：返回队列中第一个元素
 *  - toArray()：输出队列中数据
 *  - toString()：返回队列中第一个元素
 *  - reverse()：返回队列中第一个元素
 */

class LinkedListNode<T> {
  public element: T;
  public next: any;
  constructor(element: T, next?: LinkedListNode<T>) {
    this.element = element;
    this.next = next;
  }
}

export default class LinkedList<T> {
  private head: any;
  private length: number;
  constructor() {
    this.head = null; // 链表头元素
    this.length = 0; // 链表长度
  }

  push(element: T) {
    const newNode = new LinkedListNode(element);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
    return element;
  }

  getElementAt(index: number) {
    if (index >= 0 && index <= this.length) {
      let current = this.head;
      while (index--) {
        current = current.next;
      }
      return current;
    }
    return null;
  }

  insert(element: T, index) {
    if (index >= 0 && index <= this.length) {
      const node = new LinkedListNode(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }

  removeAt(index: number) {
    if (index > 0 && index < this.length) {
      let current = this.head;
      if (index == 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    }
    return null;
  }

  remove(element: T) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element: T) {
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (current.element == element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  toArray() {
    let arr = [];
    let current = this.head;
    while (current != null) {
      arr.push(current.element);
      current = current.next;
    }
    return arr;
  }

  toString() {
    return this.toArray.toString();
  }

  reverse() {
    let arr = this.toArray().reverse();
    this.head = null;
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      this.push(element);
    }
  }
}

const Linked = new LinkedList();
Linked.push(10);
Linked.push(11);
Linked.push(12);
Linked.push(13);
console.log(Linked.toArray());
console.log(Linked.size());
console.log(Linked.getElementAt(1));
console.log(Linked.remove(12));
console.log(Linked.reverse());
console.log(Linked.toArray());
