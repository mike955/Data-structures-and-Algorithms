/**
 * ES6
 * 集合：１．没有重复，２．没有顺序
 */

export default class Set {
    constructor() {
        this.items = {};
    }

    //向集合添加一个新的项
    add(value) {
        if (value in this.items) {
            return false;
        } else {
            this.items[value] = value;
        }
    }

    //从集合中移除一个项
    remove(value) {
        if (value in this.items) {
            delete items[value];
        } else {
            return false;
        }
    }

    //判断集合中是否有某个元素
    has(value) {
        return value in this.items;
    }

    //清除集合
    clear() {
        this.items = {};
    }

    //返回集合中元素个数
    size() {
        return Object.keys(this.items).length;
    }

    //返回一个包含集中所有值的数组
    values() {
        let res = [];
        for (let value in this.items) {
            res.push(value);
        }
        return res;
    }

    //求并集
    union(otherSet) {
        let unionSet = new Set();

        let values = [];
        for (let value in this.items) {
            values.push(value);
        }

        values.map(function(value, index) {
            unionSet.add(value);
        });

        values = otherSet.values();
        values.map(function(value, index) {
            unionSet.add(value);
        });

        return unionSet;
    }


    //求交集
    intersection(otherSet) {
        let intersection = new Set();

        let values = [];
        for (let value in this.items) {
            values.push(value);
        }

        values.map(function(value, index) {
            if (otherSet.has(value)) {
                intersection.add(value);
            }
        })

        return intersection;
    }

    //求差集
    difference(otherSet) {
        let differenceSet = new Set();

        let values = [];
        for (let value in this.items) {
            values.push(value);
        }

        values.map(function(value, index) {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        })

        return differenceSet;
    }

    //求子集
    subSet(otherSet) {
        if (this.items.size() > otherSet) {
            return false;
        } else {
            let values = [];
            for (let value in this.items) {
                values.push(value);
            }

            values.map(function(value, index) {
                if (!otherSet.has(value)) {
                    return false;
                }
            })
            return true;
        }
    }
}