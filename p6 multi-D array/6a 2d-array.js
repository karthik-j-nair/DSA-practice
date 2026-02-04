let prompt = require('prompt-sync')();

let arr = new Array(3);

for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(2);
}

//  in one line => let arr = Array.from({ length: 2 }, () => Array(2).fill(0)); => it fills with 0 by default

for(let i = 0; i<arr.length; i++){
    for(let j= 0; j < arr[i].length; j++){
        arr[i][j] = Number(prompt("Enter the value : "));
    }
}

for(let i = 0; i<arr.length; i++){
    for(let j= 0; j < arr[i].length; j++){
        process.stdout.write(arr[i][j] + " ");
    }
    console.log();
    
}
