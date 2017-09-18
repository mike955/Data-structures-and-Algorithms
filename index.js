//初始执行文件

import Stack from './stack';
import Queue from './queue';
import PriorityQueue from './priorityQueue';
import Set from './set';
import Dictionary from './dictionary';
import HashTable from './hashTable';
import BinarySearchTree from './binarySearchTree';

import BubbleSort from './bubbleSort';
import SelectSort from './selectSort';
import InsertionSort from './insertionSort';
import QuickSort from './quickSort';
import MergeSort from './mergeSort';

import debug from 'debug';

// let debugger = debug('algorithm');
let debugg = debug('algorithm')

//Stack
function _stack() {

    debugg('Stack start');
    let stack = new Stack();

    console.log(stack.isEmpty());
    stack.push(9);
    stack.push(8);
    console.log(stack.size());
    console.log(stack.peek());

    debugg('Stack end')
}

//Queue
function _queue() {
    debugg('Queue start');
    let queue = new Queue();

    console.log(queue.isEmpty());
    queue.enqueue(9);
    queue.enqueue(8);
    console.log(queue.size());
    console.log(queue.front());

    debugg('Queue end');
}


//PriorityQueue
function _priorityQueue() {
    debugg('PriorityQueue start');
    let priorityQueue = new PriorityQueue();

    priorityQueue.enqueue('clx', 2);
    priorityQueue.enqueue("cy", 4);
    priorityQueue.size();
    priorityQueue.dequeue();
    priorityQueue.size();
    priorityQueue.print();
    debugg('PriorityQueue end');
}

//Set
function _set() {
    debugg('Set start');
    let setA = new Set();

    setA.add(1);
    console.log(setA.values());

    setA.add(2);
    console.log(setA.has(2));

    let setB = new Set();
    setB.add(3);
    setB.add(2);
    console.log(setA.union(setB).values());
    debugg('Set end')
}

//Dictionary
function _dictionary() {
    debugg('Dictionary start');
    let dictionary = new Dictionary();

    dictionary.set('clx', '27');
    dictionary.set('cy', '24');
    dictionary.set('cc', '26');

    console.log(dictionary.has('clx'));
    console.log(dictionary.size());
    console.log(dictionary.keys());
    console.log(dictionary.values());

    debugg('Dictionary end');
}

//HashTable
function _hashTable() {
    debugg('HashTable start');
    let hashTable = new HashTable();

    hashTable.put('clx', '27');
    hashTable.put('cy', '24');
    hashTable.put('cc', '26');

    console.log(hashTable.get('clx'));
    console.log(hashTable.get('cc'));
    console.log(hashTable.get('xx'));

    debugg('HashTable end');
}


//BinarySearchTree
function _binarySearchTree() {
    debugg('BinarySearchTree start');
    let binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(7);
    binarySearchTree.insert(15);
    binarySearchTree.insert(5);
    binarySearchTree.insert(3);
    binarySearchTree.insert(9);
    binarySearchTree.insert(8);
    binarySearchTree.insert(10);
    binarySearchTree.insert(13);
    binarySearchTree.insert(12);
    binarySearchTree.insert(14);
    binarySearchTree.insert(20);
    binarySearchTree.insert(18);
    binarySearchTree.insert(25);

    /* console.log(binarySearchTree.inOrderTraverse());
    console.log(binarySearchTree.preOrderTraverse());
    console.log(binarySearchTree.postOrderTraverse()); */

    debugg('BIinarySearchTree end');
}

function _bubbleSort() {
    debugg('BubbleSort start');
    let array = [8, 7, 6, 5, 4, 3, 2, 1];

    let result = BubbleSort.bubbleSort(array);
    console.log(result);
    debugg('BubbleSort end');
}

function _selectSort() {
    debugg('SelectSort start');
    let array = [9, 8, 7, 6, 5, 4, 3, 2, 1];

    let result = SelectSort.selectSort(array);
    console.log(result);
    debugg('SelectSort end');
}

function _insertionSort() {
    debugg('InsertionSort start');
    let array = [9, 8, 7, 6, 5, 4, 3, 2, 1];

    let result = InsertionSort.insertionSort(array);
    console.log(result);
    debugg('InsertionSort end');
}


function _quickSort() {
    debugg('QuickSort start');
    let array = [10, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    let result = QuickSort.quickSort(array);
    console.log(result);
    debugg('QuickSort end');
}

function _mergeSort() {
    debugg('MergeSort start');
    let array = [10, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    let result = MergeSort.mergeSort(array);
    console.log(result);
    debugg('MergeSort end');
}

_stack();
_queue();
_priorityQueue();
_set();
_dictionary();
_hashTable();
_binarySearchTree();

_bubbleSort();
_selectSort();
_insertionSort();
_quickSort();
_mergeSort();