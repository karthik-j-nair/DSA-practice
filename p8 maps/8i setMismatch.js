// You are given an array nums of size n containing numbers from 1 to n. However, due to a data error:

// One number is duplicated.

// One number is missing.

// Your task is to find the number that is duplicated and the number that is missing, and return them in this order:

// [duplicate, missing]

function findErrorNums(nums) {
    let map = new Map(), duplicate = 0, missing = 0, n = 1;
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) missing = i;
        else if (map.get(i) > 1) duplicate = i;
    }
    return [duplicate, missing];
}
console.log(findErrorNums([1, 2, 2, 4]));
