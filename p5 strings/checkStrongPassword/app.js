// Strong Password Checker II

// A password is said to be strong if it satisfies all the following criteria:

// • It has at least 8 characters.
// • It contains at least one lowercase letter.
// • It contains at least one uppercase letter.
// • It contains at least one digit.
// • It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
// • It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
// Given a string password, return true if it is a strong password. Otherwise, return false. 




let password = "(bcDefg1!";

if (password.length < 8) {
    console.log(false);
    return; // return here block the further excecution of the code 
};

const special = "!@#$%^&*()-+";

let hasLower = false;
let hasUpper = false;
let hasDigit = false;
let hasSpecial = false;

for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (i > 0 && char === password[i - 1]) {
        console.log(false);
        return;
    }

    if (char >= 'a' && char <= 'z') hasLower = true;
    else if (char >= 'A' && char <= 'Z') hasUpper = true;
    else if (char >= 0 && char <= 9) hasDigit = true;
    else if (special.includes(char)) hasSpecial = true;
}


console.log(hasDigit && hasLower && hasSpecial && hasUpper);
