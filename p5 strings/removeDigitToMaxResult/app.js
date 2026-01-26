// Remove Digit From Number to Maximize Result

// You are given a string number representing a positive integer and a character digit. You can remove exactly one occurrence of digit from number.

// Return the resulting string after removing one occurrence of digit such that the resulting number is as large as possible. The test cases are generated such that digit is a character in number.

let number = "551";
let digit = '5';

let max = '';

for(let i = 0; i < number.length; i++){
    if(number[i] === digit){
        const val = number.slice(0, i) + number.slice(i+1);
        if(val > max) max = val;
    }
}

console.log(max);
