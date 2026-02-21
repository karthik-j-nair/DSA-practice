// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.


let prompt = require("prompt-sync")();

let a = Number(prompt("enter number : "));

let first = 1, last = a, ans = 0;

while (first <= last) {
    let mid = Math.floor((first+last)/2);
    if(mid<=Math.floor(a/mid)){
        ans = mid;
        first = mid + 1;
    }
    else {
        last = mid -1;
    }
}
console.log(ans);
