/**
 * ES6
 */

export default class LinkList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    static node(element) {
        return {
            element: element,
            next: null
        }
    }

    //向链表尾部添加元素
    insert(element) {
        let node = LinkList.node(element);

        let current = this.head;
        if (this.head === null) { //链表为空
            this.head = node
        } else {
            while (current.next) { //链表不为空
                current = current.next;
            }

            current.next = node;
        }
        this.length++;
    }

    //向链表中插入数据
    insert(position, element) {
        if (position > -1 && position < length) {
            let node = LinkList.node(element);
            let current = head,
                previous,
                index = 0;

            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;
            }
            length++;

            return true;
        } else {
            return false;
        }
    }

    //从链表中特定位置移除元素
    removeAt(position) {

        if (position > -1 && position < length) {
            let current = this.head;
            let previous;
            let index = 0;

            if (position === 0) {
                this.head = this.head.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    }

    //从链表中移除某个值元素

    //判断某个元素是否在链表中

    //判断连边是否为空

    //判断链表长度

    //打印链表

    //
}