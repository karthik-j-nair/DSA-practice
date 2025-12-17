// using an extra space

let arr = [23, 34, 65, 8, 33];
let temp = new Array(arr.length);

let i = arr.length - 1;
for(let j = 0; j <= arr.length -1; j++){
    temp[j] = arr[i];
    i--;
}
console.log(arr);
console.log(temp);


// using two pointer method

let arr1 = [23, 54, 82, 43, 66, 99];
let l = 0;
let m = arr1.length - 1;

while (l < m){
    let temp = arr1[m];
    arr1[m] = arr1[l];
    arr1[l] = temp;
    l++;
    m--;
}
console.log(arr1);
