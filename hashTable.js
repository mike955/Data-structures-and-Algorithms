/**
 * ES6
 */

export default class HashTable {
    constructor() {
        this.table = [];
    }

    //hash函数
    static _djb2HashCode = function(key) {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    }

    //向表添加新的元素
    put(key, value) {
            let position = HashTable._djb2HashCode(key);
            this.table[position] = value;
        }
        //根据键值从表中移除值
    remove(key) {
        this.table[HashTable._djb2HashCode(key)] = undefined;
    }

    //根据键值从表中返回值
    get(key) {
        return this.table[HashTable._djb2HashCode(key)];
    }
}