let prompt = require('prompt-sync')()
let str1 = prompt("Enter first string : ");
let str2 = prompt("Enter second string : ");

let arr = new Array(128).fill(0);
let isAnagram = true;

if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
        let ascii = str1.charCodeAt(i);
        arr[ascii]++;
    }
    for (let i = 0; i < str2.length; i++) {
        let ascii = str2.charCodeAt(i);
        arr[ascii]--;
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            isAnagram = false;
        }
    }
}
else {
    isAnagram = false;
}

isAnagram ? console.log("They are anagram") : console.log("They are not anagram");
