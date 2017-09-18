/**
 * ES6:BinarySearchTree
 */

export default class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

    static _node(key) {
        return {
            key: key,
            left: null,
            right: null
        }
    }

    //向树中插入新节点
    insert(key) {
        let newNode = BinarySearchTree._node(key);

        if (this.rootNode === null) {
            this.rootNode = newNode;
        } else {
            BinarySearchTree._insertNode(this.rootNode, newNode);
        }
    }

    static _insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                BinarySearchTree._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                BinarySearchTree._insertNode(node.right, newNode);
            }
        }
    }

    //在树中查找某个键
    serach(key) {
        return BinarySearchTree._searchNode(this.rootNode, key);
    }

    static _searchNode(node, key) {
        if (node) {
            if (node.key > key) {
                return BinarySearchTree._searchNode(node.left, key);
            } else if (node.key < key) {
                return BinarySearchTree._searchNode(node.right.key);
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    /*     //中序遍历树节点
        inOrderTraverse() {
            let inOrder = BinarySearchTree._inOrderTraverse(this.rootNode);
            return inOrder;
        }

        static _inOrderTraverse(node) {
            let nodes = []
            if (node !== null) {
                BinarySearchTree._inOrderTraverse(node.left);
                nodes.push(node.key);
                BinarySearchTree._inOrderTraverse(node.rigth);
            }
            return nodes;
        }

        //先序遍历树节点
        preOrderTraverse() {
            let preOrder = BinarySearchTree._preOrderTraverse(this.rootNode);
            return preOrder;
        }

        static _preOrderTraverse(node) {
            let nodes = [];
            if (node !== null) {
                nodes.push(node.key);
                BinarySearchTree(node.left);
                BinarySearchTree(node.right);
            }
            return nodes;
        }

        //后续遍历树节点
        postOrderTraverse() {
            let postOrder = BinarySearchTree._postOrderTraverse(this.rootNode);
            return postOrder;
        }

        static _postOrderTraverse(node) {
            let nodes = [];
            if (node !== null) {
                BinarySearchTree._postOrderTraverse(node.left);
                BinarySearchTree._postOrderTraverse(node.right);
                postOrder.push(node.key);
            }
            return nodes;
        } */

    //返回树中最小值
    mix() {
        let maxNode = this.rootNode;
        if (maxNode) {
            while (maxNode.left) {
                maxNode = maxNode.node;
            }
            return maxNode;
        }
        return null;

    }

    //返回树中最大值
    max() {
        let minNode = this.rootNode;
        if (minNode) {
            while (minNode.right) {
                minNode = minNode.right;
            }

            return minNode;
        } else {
            return null;
        }

    }

    //从树中移除某个键
    remove(key) {
        //TODO
    }
}