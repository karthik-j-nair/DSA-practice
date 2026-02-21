// finding hcf(gcd)

let prompt = require("prompt-sync")();

let a = Number(prompt("enter number a: "));
let b = Number(prompt("enter number b: "));

// console.log(gcd(Math.min(a,b), a, b));


// function gcd(n, a, b){
//     if(n==1) return 1;
//     if(a%n==0 && b%n==0) return n;
//     return gcd(n-1, a, b);
// }


//========================================= second method 

console.log(gcd(a, b));

// function gcd(a, b) {
//     if(a==b) return a;
//     if(a>b) return gcd(a-b, b);
//     return gcd(a, b-a);
// }


// ===================================== optimal method

function gcd(a,b) {
    if(b==0) return a;
    return gcd(b, a%b);
}