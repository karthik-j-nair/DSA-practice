let prompt = require("prompt-sync")();
let letter = prompt("Enter a letter : ");

switch(letter){
    case 'a' :
    case 'e' :
    case 'i' :
    case 'o' :
    case 'u' : {
        console.log("Letter is a vowel");
        break;
    }

    default : {
        console.log("Letter is a consonant");
    }
}