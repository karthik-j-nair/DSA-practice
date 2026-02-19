let prompt = require("prompt-sync")();
let n = Number(prompt("enter a number: "));

let first = 0, second = 1;

process.stdout.write(first + " " + second + " ");

for (let i = 1; i <= n - 2; i++) {
    let third = first + second;
    process.stdout.write(third + " ");
    first = second;
    second = third;
}