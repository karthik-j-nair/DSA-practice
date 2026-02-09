// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

let nums = [1,2,3,4,2,1];
let map = new Map(), sum = 0;

for(let i = 0; i < nums.length; i++){
    if(map.has(nums[i])){
        map.set(nums[i], map.get(nums[i]) + 1);
    }
    else {
        map.set(nums[i], 1);
    }
}

for(let key of map.keys()){
    if(map.get(key) === 1){
        sum += key;
    }
}

console.log(sum);

