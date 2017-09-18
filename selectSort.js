export default class SelectSort {
    static selectSort(array) {
        if (Array.isArray(array)) {
            if (array.length === 1) {
                return array;
            } else {
                let length = array.length;
                //console.log(length)
                let indexMin;
                for (let i = 0; i < length - 1; i++) {
                    indexMin = i;
                    //console.log(indexMin)
                    for (let j = i + 1; j < length; j++) {
                        if (array[indexMin] > array[j]) {
                            indexMin = j;
                        }
                    }

                    if (indexMin !== i) {
                        //console.log(indexMin + "" + i)
                        let tem = array[indexMin];
                        array[indexMin] = array[i];
                        array[i] = tem;
                    }
                }
                return array;
            }
        } else {
            return false;
        }
    }
}