// You are given a string s consisting of only English letters.
// Return the greatest English letter (in terms of alphabetical order) that appears in both lowercase and uppercase in s.
// The returned letter should be in uppercase.
// If no such letter exists, return an empty string.

let s = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"

let max = '';
for (let i = 0; i < s.length; i++) {
    
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
        let upper = s[i];
        let lower = upper.toLowerCase();
        if (s.includes(lower)){
            if(max < upper) max = upper;
        };
    }
}
console.log(max);