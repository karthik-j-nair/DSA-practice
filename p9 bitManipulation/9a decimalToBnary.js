let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number : "));
let binary = '';

while(n>0){
    let rem = n % 2;
    binary = rem + binary;
    n = Math.floor(n/2);
}

console.log(binary);
