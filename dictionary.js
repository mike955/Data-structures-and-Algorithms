/**
 * ES6
 */

export default class Map {
    constructor() {
        this.items = {};
    }

    //向字典添加元素
    set(key, value) {
        this.items[key] = value;
    }

    //通过使用键值来从字典中移除键值对应的数据值
    remove(key) {
        if (key in this.items) {
            delete this.items[key];
            return true;
        }
        return false;
    }

    //判断某个键值是否存在字典中
    has(key) {
        return key in this.items;
    }

    //通过键值查找特定的数值并返回
    get(key) {
        return key in this.items ? items[key] : undefined;
    }

    //清除字典里所有元素
    clear() {
        this.items = {};
    }

    //返回字典所包含元素的个数
    size() {
        return Object.keys(this.items).length;
    }

    //将字典所包含的所有键名以数组形式返回
    keys() {
        let keys = [];
        for (let key in this.items) {
            if (key in this.items) {
                keys.push(key);
            }
        }
        return keys;
    }

    //将字典所包含的所有数值以数组形式返回
    values() {
        let values = [];
        for (let key in this.items) {
            if (key in this.items) {
                values.push(this.items[key]);
            }
        }
        return values;
    }
}