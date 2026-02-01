// You are given a 0-indexed string array , where each element consists of lowercase English letters.
// In one operation, select any index  such that  and  and  are anagrams, and delete  from the array.
// Repeat this operation until no more deletions can be made.
// Return the final array of words after all operations

let words = ['abba', 'baba', 'bbaa', 'cd', 'cd'];

let seen = {};
let newWords = [];

for(let i = 0; i < words.length; i++){
    let key = words[i].split('').sort().join('');

    if(!seen[key]){
        seen[key] = true;
        newWords.push(key);
    }
}
console.log(newWords);
