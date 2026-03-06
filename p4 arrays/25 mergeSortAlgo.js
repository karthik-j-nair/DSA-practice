function merge(arr, f, l, mid) { // TC - O(n)
    let temp = new Array(l - f + 1);
    let i = f, j = mid + 1, k = 0;
    while (i <= mid && j <= l) {
        if (arr[i] < arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }

    while (i <= mid) temp[k++] = arr[i++];
    while (j <= l) temp[k++] = arr[j++];

    i = f, k = 0;
    while(k < temp.length) arr[i++] = temp[k++];
}

function divide(arr, f, l){ // TC - O(log n)
    if(f>=l) return
    let mid = Math.floor((f+l)/2);
    divide(arr, f, mid);
    divide(arr, mid+1, l);
    merge(arr, f, l, mid);
}

let arr = [12, 8 , 9 , 5 , 7 ,0 , 2 ,19];

divide(arr, 0, arr.length - 1); // then total  // TC - O(n log n)

console.log(arr);
