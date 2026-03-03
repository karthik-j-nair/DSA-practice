// Given an array arr, replace every element with the greatest element among the elements to its right, and replace the last element with -1.
// Return the modified array.



function replaceElements(arr) {
    // write your code here
    let maxElem = -1;
    // for (let i = 0; i < arr.length - 1; i++) {

    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (maxElem < arr[j]) maxElem = arr[j];
    //     }
    //     arr[i] = maxElem;
    //     maxElem = 0;
    // }

    // optimal
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        arr[i] = maxElem;
        maxElem = Math.max(maxElem, temp);
    }
    return arr;
}


console.log(replaceElements([17, 18, 5, 4, 6, 1]));
