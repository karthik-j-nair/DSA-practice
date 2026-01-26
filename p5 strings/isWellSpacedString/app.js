// You are given a 0-indexed string s consisting of only lowercase English letters, where each letter appears exactly twice.
// You are also given a 0-indexed integer array distance of length 26.
// Each letter in the alphabet is numbered from 0 to 25 ('a' → 0, 'b' → 1, ..., 'z' → 25).
// In a well-spaced string, the number of letters between the two occurrences of the i-th letter must be exactly equal to distance[i].
// Return true if s is a well-spaced string, otherwise return false.

let s = "zzxxccvvbbnnmmllkkjjiihhggffddssaa";
let distance = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let copy = [...distance];
let isEquiDistant = true;
for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
        if (s.charCodeAt(i) === s.charCodeAt(j)) {
            let val = j - i - 1;
            copy[s.charCodeAt(i) - 97] = copy[s.charCodeAt(i) - 97] - val;
            break;
        }
    }
}

for (let i = 0; i < copy.length; i++) {
    if (copy[i] !== 0) {
        isEquiDistant = false;
    }
}
console.log(isEquiDistant);