// Given an integer array nums, return the most frequent even element.

// If there is a tie, return the smallest one. If there is no such element, return -1.

let nums = [0,1,4,4,2,2,1];

let map = new Map();
let freq = 0, ans = 0;

for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0) map.set(nums[i], (map.get(nums[i]) || 0) + 1);
}

for(let key of map.keys()){
    if(freq < map.get(key)){
        freq = map.get(key);
        ans = key;
    }
    else if (freq === map.get(key)){
        ans = Math.min(ans, key);
    }
}

console.log(ans);




