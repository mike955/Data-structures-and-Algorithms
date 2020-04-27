/** 队列
 * 包含方法：
 *  - isEmpty(): 队列是否为空
 *  - size()： 队列元素个数
 *  - enqueue()：入队
 *  - dequeue()：出队
 *  - print()：输出队列中数据
 *  - front()：返回队列中第一个元素
 */

 class Queue {
   constructor(){
     this.items = []
   }

   isEmpty(){
    return this.items.length === 0 ? true : false;
   }

   size() {
    return this.items.length;
   }

   enqueue(element) {
    return this.items.push(element);
   }

   dequeue() {
    return this.items.length == 0 ? null : this.items.pop()
   }

   print() {
    return this.items.toString()
   }

   front() {
    return this.items.length == 0 ? null : this.items[0];
   }
 }