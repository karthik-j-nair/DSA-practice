let arr1 = [1, 3, 5, 8], arr2 = [2, 4, 6, 7, 9];

let sorted = new Array(arr1.length + arr2.length);

let i = 0, j = 0, k = 0;

while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) sorted[k++] = arr1[i++]; // here we are assigning the value then incrementing the value
    else sorted[k++] = arr2[j++];
}

while (i < arr1.length) {
    sorted[k++] = arr1[i++];
}

while (j < arr2.length) {
    sorted[k++] = arr2[j++];
}

console.log(sorted);
