// Count of prime(Seive of Eratosthenes)


let prompt = require("prompt-sync")();

let a = Number(prompt("enter number : "));

let arr = new Array(a+1).fill(true);

for(let i = 2; i <= Math.sqrt(a); i++){
    if(arr[i]){
        for(let j = i*i; j<arr.length; j+=i){
            arr[j] = false;
        }
    }
}

for (let k = 2; k < arr.length; k++) {
    if(arr[k]) process.stdout.write(k+ " ");
}