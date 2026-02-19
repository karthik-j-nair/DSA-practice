let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));

function fibo(n, first, second) {
    if (n <= 0) return;
    process.stdout.write(first + " ");
    fibo(n-1, second, first+second);
}
fibo(n, 0, 1);