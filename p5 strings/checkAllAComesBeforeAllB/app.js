// You are given a string s consisting only of characters 'a' and 'b'. Return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

let s = 'bb';
let result = false;
let copy = s.split('');
if (s.length === 1) {
    result = true;
}
else {
    for (let i = 0; i < copy.length - 1; i++) {
        for (let j = 0; j < copy.length - 1 - i; j++) {
            if (copy[j] > copy[j + 1]) {
                let temp = copy[j];
                copy[j] = copy[j + 1];
                copy[j + 1] = temp;
            }
        }
    }
    
    if (s === copy.join('')) {
        result = true;
    }
}
console.log(result);
