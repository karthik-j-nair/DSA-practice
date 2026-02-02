// You are given a string s representing a sentence. A sentence is a list of tokens separated by single spaces. Each token is either:
// • A word consisting of lowercase English letters, or
// • A positive number (digits only, no leading zeros)
// Return "true" if all the numbers in the sentence appear in strictly increasing order from left to right. Otherwise, return "false".

// let s = '1 box has 3 blue 4 red 6 green and 12 yellow marbles';
let s = 'has a 5 x 5';
let arr = s.split(' ');
let max = 0, islarge = true;
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        if (Number(arr[i]) <= max) {
            islarge = false;
            break;
        }
        else {
            max = Number(arr[i]);
        }
    }
}
console.log(islarge);

