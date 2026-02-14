// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return 
// Note that the strings are considered in the order in which they appear in the array.

// Explanation:
// The only distinct strings in arr are "d" and "a".
// "d" appears 1st, so it is the 1st distinct string.
// "a" appears 2nd, so it is the 2nd distinct string.
// Since k == 2, "a" is returned.

let arr = ["d","b","c","b","c","a"], k = 2;
let map = new Map();
for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}

let count = 0, isPresent = "None";
for (let str of arr) {
    if (map.get(str) === 1) {
        count++;
        if (count === k) isPresent = str;
    }
}
console.log(isPresent);

// --------------soln 2
// let newArr = [];
// for(let key of map.keys()){
//     if(map.get(key) === 1) newArr.push(key);
// }
// if(newArr.length < k) return "None";
// for(let i = 0; i < newArr.length; i++){
//     if(k-1 === i) return newArr[i];
// }