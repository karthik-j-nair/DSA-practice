// You are given a string  consisting of digits and an integer .
// A round can be completed if the length of  is greater than . In one round:
// • 	Divide  into consecutive groups of size .
// • 	Replace each group with a string representing the sum of its digits.
// • 	Concatenate all resulting strings to form a new .
// Repeat this process until the length of  is less than or equal to .
// Return the final string  after all rounds.

let s = '00000000'
let k = 3;

while (s.length > k) {
    let result = '';

    for (let i = 0; i < s.length; i += k) {
        let sum = 0;
        let part = s.slice(i, i + k);
        for (let j = 0; j < part.length; j++) {
            sum += Number(part[j]);
        }
        result += sum
    }

    s = result;
}

console.log(s);
