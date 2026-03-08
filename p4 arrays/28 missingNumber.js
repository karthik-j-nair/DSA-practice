// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

function missingNumber(arr) {
    // Your code here
    let i = 0;
    while(i < arr.length) {
        const realIdx = arr[i];
        if(arr[i] < arr.length && arr[i] !== arr[realIdx]) {
            [arr[i], arr[realIdx]] = [arr[realIdx], arr[i]];
        }
        else {
            i++;
        }
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== i) return i;
    }
    return arr.length;
}

console.log(missingNumber([3,0,1]))