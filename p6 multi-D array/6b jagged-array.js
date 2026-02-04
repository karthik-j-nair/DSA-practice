// 1 2 3 4
// 5 6
// 7 8 9
// 9 6   length of sub array is not fixed

let prompt = require('prompt-sync')();

let arr = new Array(3);

for(let i = 0; i < arr.length; i++){
    let subArrLength = Number(prompt(`Enter length of ${i} th row : `));
    arr[i] = new Array(subArrLength); 
}

for(let i = 0; i < arr.length; i++){
    for(let j=0; j < arr[i].length; j++){
        arr[i][j] = Number(prompt("Enter value : "));
    }
}

for(let i = 0; i < arr.length; i++){
    for(let j=0; j < arr[i].length; j++){
        process.stdout.write(arr[i][j] + " ");
    }
    console.log();
    
}