let arr = [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1];
// let i = 0, j = 0;

// while(i < arr.length){
    
//     if(arr[i] === 0){
//         let temp = arr[i];
//         arr[i] = arr[j]
//         arr[j] = temp;
//         j++;
//     }
//     i++;
// }
// console.log(arr);


// ---------OR-----------------

let j = 0;
for(let i = 0; i<arr.length; i++){
    if(arr[i] === 0){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        j++
    }
}

console.log(arr);

