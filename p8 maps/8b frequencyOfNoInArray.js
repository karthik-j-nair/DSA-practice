let arr = [1,2,3,2,3,4,6,33,5,3,77,21,33,4,9,0,7];
console.log(arr.length);


let map = new Map();

for(let i = 0; i < arr.length; i++){
    // if(!map.has(arr[i])){
    //     map.set(arr[i], 1);
    // }
    // else {
    //     map.set(arr[i], (map.get(arr[i]))+ 1);
    // }

    // ========> OR
    map.set(arr[i], (map.get(arr[i]) || 0) + 1)  
    // if map.get(arr[i]) it gets nothing then 0 will come in its place and gets increased by 1 in initial stage
}
console.log(map);
