function bubleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                const c = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = c; 
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
    }
    return arr;
}

const arr = [56, 90, 45, 1, 8];
console.log(bubleSort(arr));