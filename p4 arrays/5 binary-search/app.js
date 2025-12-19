let prompt = require('prompt-sync')();

let arr = [3, 6, 7, 21, 34, 56, 75, 88]; // binary search only applicable on sorted array
let target = Number(prompt("Target value : "));

let strt = 0, end = arr.length - 1, index = -1;

while(strt <= end){
    let mid = Math.floor((strt+end)/2);
    if (arr[mid] === target) {
        index = mid;
        break;
    }
    else if (arr[mid] < target){
        strt = mid + 1;
    }
    else {
        end = mid - 1;
    }
}

(index === -1) ? console.log("not found") : console.log(`Your value at ${index} index`);
