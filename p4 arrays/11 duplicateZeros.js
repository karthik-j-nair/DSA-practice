// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.


/* Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4] */


let arr = [1, 0, 2, 3, 0, 4, 5, 0], count = 0;
for (let k = 0; k < arr.length; k++) {
    if (arr[k] === 0) count++;
}
// console.log(count);

let i = arr.length - 1, j = arr.length - 1 + count;

while (i >= 0) {
    if(j < arr.length) {
        arr[j] = arr[i];
    }
    if(arr[i] == 0){
        j--
        if (j < arr.length) {
            arr[j] = arr[i];
        }
    }
    i--, j--;
}

console.log(arr);

