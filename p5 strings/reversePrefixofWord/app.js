// You are given a 0-indexed string word and a character ch.
// Reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive).
// If the character ch does not exist in word, return the original string unchanged.

let word = 'abcdefd', ch = 'd';

let idx = -1;
for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
        idx = i;
        break;
    }
}
if (idx === -1) { 
    console.log(word); 
}
let newWord = '';
for (let j = idx; j >= 0; j--) {
    newWord += word[j];
}
newWord += word.slice(idx + 1);
console.log(newWord);
