export default class InsertionSort {
    static insertionSort(array) {

        if (Array.isArray(array)) {
            let length = array.length;

            if (length === 1) {
                return array;
            } else {
                let tem, j;

                for (let i = 1; i < length; i++) {
                    j = i;
                    tem = array[i];
                    while (j > 0 && array[j - 1] > tem) {
                        array[j] = array[j - 1];
                        j--
                    }
                    array[j] = tem;
                }
                return array;
            }
        } else {
            return false;
        }
    }
}