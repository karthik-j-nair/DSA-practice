//You are given a string s and a character letter. Return the percentage of characters in s that are equal to letter, rounded down to the nearest integer.

let s = "malayalam";
let letter = "m";
let count = 0;
for (let i = 0; i < s.length; i++) {
    if (s[i] === letter) {
        count++;
    }
}
console.log(Math.trunc((count / s.length) * 100));