// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


function moveZerosToEnd(arr) {
    // Write your logic here
    let insertPos = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos++;
        }
    }
    while (insertPos < arr.length) {
        arr[insertPos] = 0;
        insertPos++;
    }
    return arr;
}


console.log(moveZerosToEnd([0, 1, 0, 1, 1]));
