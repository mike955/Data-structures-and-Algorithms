export default class MergeSort {
    static mergeSort(array) {
        if (Array.isArray(array)) {
            return MergeSort._mergeSortRec(array);
            // if(array.length ===1){
            //     return array;
            // }else{
            //     let mid = Math.floor(array.length/2);
            //     let left = array.slice(0,mid);
            //     let right = array.slice(mid, array.length);

            //     return _merge()
            // }
        } else {
            return false;
        }
    }

    static _mergeSortRec(array) {
        if (array.length === 1) {
            return array;
        } else {
            let mid = Math.floor(array.length / 2);
            let left = array.slice(0, mid);
            let right = array.slice(mid, array.length);

            return MergeSort._merge(MergeSort._mergeSortRec(left), MergeSort._mergeSortRec(right));
        }
    }

    static _merge(left, right) {
        let result = [];
        let il = 0;
        let ir = 0;
        //console.log(right);
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++])
            }
        }

        while (il < left.length) {
            result.push(left[il++]);
        }

        while (ir < right.length) {
            result.push(right[ir++])
        }
        return result;
    }
}