export default class BubbleSort {

    static bubbleSort(array) {
        if (Array.isArray(array)) {
            if (array.length === 1) {
                return array;
            } else {
                for (let i = 0; i < array.length; i++) {
                    for (let j = 0; j < array.length - 1; j++) {
                        if (array[j + 1] < array[j]) {
                            let tem = array[j];
                            array[j] = array[j + 1];
                            array[j + 1] = tem;
                        }
                    }
                }
                return array;
            }
        } else {
            return false;
        }
    }
}