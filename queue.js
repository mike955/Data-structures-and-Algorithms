/**
 * ES6
 */
export default class Queue {
    constructor() {
        this.items = [];
    }

    //入队
    enqueue(element) {
        this.items.push(element);
    }

    //出队
    dequeue(element) {
        this.items.shift()
    }

    //返回队列中第一个元素
    front() {
        return this.items[0] != 'undefined' ? this.items[0] : false;
    }

    //判断队列是否为空
    isEmpty() {
        return this.items.length === 0 ? true : false;
    }

    //返回队列的元素个数
    size() {
        return this.items.length;
    }

    //输出队列中数据
    print() {
        return this.items.toString();
    }
}