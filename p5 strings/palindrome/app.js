let prompt = require("prompt-sync")()

let str = prompt("Enter a string : ");
j = str.length - 1;
i = 0;
let isPalindrome = true;


while (j > i) {
    if (str.charAt(i) !== str.charAt(j)) {
        isPalindrome = false;
        break;
    }
    j--, i++;
}
console.log(isPalindrome?"Palindrome" : "Not palindrome");
