/**
 * ES6
 */

export default class PriorityQueue {
    constructor() {
        this.items = [];
    }

    //队列元素格式
    static queueElement(element, priority) {
        return {
            element: element,
            priority: priority
        }
    }

    //入队
    enqueue(element, priority) {
        let queueElement = PriorityQueue.queueElement(element, priority);

        if (this.items.length === 0) {
            this.items.push(queueElement);
        } else {
            let added = false;
            for (let i = 0; i < this.items.length; i++) {
                //比较优先级，找到比该元素优先级小的元素，然后将元素放在该元素前面
                if (queueElement.priority > this.items[i].priority) {
                    this.items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.items.push(queueElement);
            }
        }
    }

    //出队
    dequeue() {
        this.items.shift();
    }

    //返回队列第一个元素
    front() {
        return this.items[0] === 'undefined' ? this.items[0] : false;
    }

    //判断队列是否为空
    isEmpty() {
        return this.items.length === 0 ? true : false;
    }

    //打印队列元素及其优先级
    print() {
        this.items.map(function(val, index) {
            console.log(val);
        })
    }

    //返回队列元素个数
    size() {
        return this.items.length;
    }

}