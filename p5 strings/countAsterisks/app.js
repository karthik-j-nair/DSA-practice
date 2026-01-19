// You are given a string s containing lowercase English letters, the character '*', and the character '|'. The character '|' appears in s in pairs. Every pair of '|' characters denotes a segment of the string (between that pair) where '*' characters should not be counted. Return the number of '*' characters in s that are not between a pair of '|' characters.

let str = "yo|uar|e**|b|e***au|tifu|l";

let arr = str.split("|");
let count = 0;
for (let i = 0; i < arr.length; i = i + 2) {
    let temp = arr[i];
    for (let j = 0; j < temp.length; j++) {
        if (temp[j] === "*") {
            count++;
        }
    }
}

console.log(`Count => ${count}`);
