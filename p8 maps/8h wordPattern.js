// Given a string pattern and a space-separated string s, determine if s follows the same pattern.

// Here, following the pattern means that there is a one-to-one correspondence between characters in pattern and words in s:

// Each character in pattern should map to exactly one word in s.

// No two characters should map to the same word.

// Return true if s follows the pattern; otherwise, return false.

function wordPattern(s, pattern) {
    let sArr = s.split(" ");

    if (sArr.length !== pattern.length) return false;

    let patternMap = new Map(), sMap = new Map();
    for (let i = 0; i < pattern.length; i++) {
        let ch = pattern[i];
        let word = sArr[i];

        if (patternMap.has(ch)) {
            if (patternMap.get(ch) !== word) return false;
        }
        else {
            patternMap.set(ch, word);
        }

        if (sMap.has(word)) {
            if (sMap.get(word) !== ch) return false;
        }
        else {
            sMap.set(word, ch);
        }
    }
    return true;
}

console.log(wordPattern('dog cat cat dog' ,'abba'));
