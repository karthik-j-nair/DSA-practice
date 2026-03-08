// It is only applicable when a particular interval is given to sort like 0 to n , 1 to n etc....

function cyclicSort(arr) {
    let i = 0;
    while(i < arr.length) {
        let realIdx = arr[i] - 1;
        if(arr[i] !== arr[realIdx]){
            [arr[i], arr[realIdx]] = [arr[realIdx], arr[i]];
        }
        else {
            i++
        }
    }
    return arr;
}

console.log(cyclicSort([1,3,4,6,5,2]));