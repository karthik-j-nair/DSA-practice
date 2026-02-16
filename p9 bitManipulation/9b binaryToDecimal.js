let prompt = require("prompt-sync")();

let n = prompt("Enter a binary number : ");
let leng = n.length - 1, decimal = 0;

while(leng >= 0){
    let bit = Number(n[leng]);
    decimal += bit * Math.pow(2, (n.length - leng - 1));
    leng--;
}

console.log(decimal);
