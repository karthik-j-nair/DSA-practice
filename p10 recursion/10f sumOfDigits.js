let prompt = require("prompt-sync")();

let n = Number(prompt("enter a number: "));

let sum = 0;
function sumOfDigits(n) {
    // Write your logic here
    if(n===0) return sum;
    let rem = n%10;
    sum += rem;
    n = Math.floor(n/10);
    return sumOfDigits(n);
}

console.log(sumOfDigits(n));
