/* function Stack() {

    //声明一个数组，用来保存栈里面的元素
    let items = [];

    //入栈
    this.push = function(element) {
        items.push(element);
    }

    //出栈
    this.pop = function() {
        items.pop()
    }

    //返回栈顶元素
    this.peek = function() {
        return items[items.length - 1];
    }

    //判断栈是否为空
    this.isEmpty = function() {
        return items.length === 0;
    }

    //清除栈元素
    this.clear = function() {
        items = [];
    }

    //返回栈元素个数
    this.size = function() {
        return items.length;
    }

    //顺序输出栈里的元素
    this.print = function() {
        console.log(items.toString());
    }
}

let stack = new Stack();

console.log(stack.isEmpty());
stack.push(9);
stack.push(8);
console.log(stack.size());
console.log(stack.peek()); */


//ES6
export default class Stack {

    constructor() {
        this.items = [];
    }

    //入栈
    push(element) {
        this.items.push(element);
    }

    //出栈
    pop() {
        this.items.pop()
    }

    //返回栈顶元素
    peek() {
        return this.items[this.items.length - 1];
    }

    //判断栈是否为空
    isEmpty() {
        return this.items.length === 0;
    }

    //清除栈元素
    clear() {
        items = [];
    }

    //返回栈元素个数
    size() {
        return this.items.length;
    }

    //顺序输出栈里的元素
    print() {
        console.log(this.items.toString());
    }
}