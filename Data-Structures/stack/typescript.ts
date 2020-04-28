/** 栈
 * 包含方法：
 *  - isEmpty(): 队列是否为空
 *  - size()： 队列元素个数
 *  - push()：入队
 *  - pop()：出队
 *  - peak()：返回栈顶元素
 *  - clear(): 清楚栈顶元素
 *  - print()：输出队列中数据
 */

export default class Stack<T> {
  private items: any;
  constructor() {
    this.items = []
  }

  isEmpty() {
    return this.items.length === 0 ? true : false;
  }

  size() {
    return this.items.length;
  }

  push(element: T) {
    return this.items.push(element);
  }

  pop() {
    return this.items.length == 0 ? null : this.items.pop();
  }

  peak() {
    return this.items.length == 0 ? null : this.items[0];
  }

  clear() {
    return this.items = [];
  }

  print() {
    return this.items.toString()
  }
}