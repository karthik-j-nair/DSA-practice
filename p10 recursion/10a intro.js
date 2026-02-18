let prompt = require("prompt-sync")();

let n = Number(prompt("enter a number: "));

callHello(n);

function callHello(n) {
    if(n === 0) return;
    console.log("hello");
    callHello(n-1);
}