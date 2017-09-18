export default class QuickSort {
    static quickSort(array) {
        if (Array.isArray(array)) {
            if (array.length === 1) {
                return array;
            } else {
                let res = QuickSort._quick(array);
                return res;
            }
        } else {
            return false;
        }
    }

    static _quick(array) {
        if (array.length <= 1) {
            return array;
        } else {
            let pivot = Math.floor(array.length / 2);
            let left = [];
            let right = [];
            let pivotValue = array.splice(pivot, 1);

            array.map(function(val, index) {
                if (val > pivotValue) {
                    right.push(val);
                } else {
                    left.push(val);
                }
            });

            return QuickSort._quick(left).concat(pivotValue, QuickSort._quick(right));
        }
    }
}