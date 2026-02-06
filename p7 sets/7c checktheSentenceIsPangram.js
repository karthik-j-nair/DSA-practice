// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

let sentence = "thequickbrownfoxjumpsoverthelazydo"

let set = new Set(sentence);
let isTrue = true;
for(let i = 97; i<= 122; i++){
    if(!set.has(String.fromCharCode(i))) isTrue = false;
    
}
console.log(isTrue);
