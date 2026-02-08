// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1.
// Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers.

// Given a number n, determine whether it is a happy number.

let n = 19;

let set = new Set();
let isOne = false;


while(true){
    let sum = 0;
    while (n > 0){
        let rem = n % 10;
        sum = sum + rem*rem;
        n = Math.trunc(n/10);
    }
    if(set.has(sum)) {
        break;
    }
    else {
        set.add(sum)
    }
    if(sum === 1) {
        isOne = true;
        break;
    };
    n = sum;
    
}
console.log(isOne);
