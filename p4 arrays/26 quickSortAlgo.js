function findPartition(arr, f, l) { // TC - O(n)
    let i = f - 1, j = f, pivot = arr[l];
    while (j < l) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
        j++;
    }

    i++;
    swap(arr, i, l);
    return i;
}

function swap(arr, l, m) {
    [arr[l], arr[m]] = [arr[m], arr[l]];
}

function quickSort(arr, f, l) { // TC - O(log n)
    if (f >= l) return;
    let pIdx = findPartition(arr, f, l);
    quickSort(arr, f, pIdx - 1);
    quickSort(arr, pIdx + 1, l);
}

let arr = [12, 8 , 9 , 5 , 7 ,0 , 2 ,19];

quickSort(arr, 0, arr.length - 1); // then total  // TC - O(n log n)

console.log(arr);