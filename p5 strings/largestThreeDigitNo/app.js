// You are given a string num representing a large integer.
// A good integer is a substring of num with length 3 that consists of the same digit repeated three times (e.g., "777" or "000").
// Return the largest good integer as a string.
// If no such substring exists, return an empty string "".

let num = '60001338839';

let max = '';

for(let i = 0; i <= num.length - 3; i++){
    if(num[i] === num[i+1] && num[i] === num[i+2]){
        let cand = num.slice(i, i+3);
        if(cand > max) max = cand;
    }
}

console.log(max);
