// prime or not

let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a input : "));

// let counter = 0;
// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         counter++;
//     }
// }
// if (counter === 2) {
//     console.log("prime")
// } else {
//     console.log("not prime")
// }



// ==============> Second Approach



// let isPrime = true;
// if (n <= 1) isPrime = false;
// else if (n === 2) isPrime = true;
// else if (n % 2 === 0) isPrime = false;
// else {
//     for (let i = 3; i <= Math.trunc(Math.sqrt(n)) ; i += 2) {
//         // it is said that, a number is prime when there is no factor till the sqrt of that number.
//         if (n % i === 0) {
//             isPrime = false;
//             break
//         }
//     }
// }
// console.log(isPrime ? "Prime" : "Not Prime");



// ===============================>  sum of all number of a digit


// let num = Number(prompt("Enter a number : "));
// let rev = 0
// while (num > 0) {
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.trunc(num/10);
// }
// console.log(rev);





// ===================================> ISBN (International Standard Book Number)
//  if the ISBN is 10 digit then we just multiply all the digit with its corresponding positons from left to right then add them and at last mod with '11' if the value is 0 then ISBN is valid.

let isbn = Number(prompt("Enter ISBN : "));
let count = 0;
let tempISBN = isbn;

while (isbn > 0){
    count++;
    isbn = Math.trunc(isbn/10);
}

if (count !== 10) {
    console.log("Invalid ISBN");
}
else {

    let total = 0;
    for (let i = count; i >= 1; i--) {
        
        let tem = tempISBN % 10;
        total = i * tem + total;
        tempISBN = Math.trunc(tempISBN/10);

    }

    console.log((total % 11 === 0) ? "True" : "False");
}


