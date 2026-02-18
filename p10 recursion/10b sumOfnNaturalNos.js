let prompt = require("prompt-sync")();

let n = Number(prompt("enter a number: "));

let sum = '';
naturalNos(n);
function naturalNos(n) {
    if (n === 0) {
        console.log(sum);
        return;
    }
    sum = n + " " + sum;
    naturalNos(n - 1);
}