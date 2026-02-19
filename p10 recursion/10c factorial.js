let prompt = require("prompt-sync")();

let n = Number(prompt("enter a number: "));

console.log(fact(n));


function fact(n){
    if(n===0) return n;

    return n * fact(n - 1);
}