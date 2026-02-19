let prompt = require("prompt-sync")();
let n = Number(prompt("enter a number: "));

function fact(n) {
    if(n ===0 || n ===1) return n;
    return fact(n-1) + fact(n-2);
}

console.log(fact(n));
