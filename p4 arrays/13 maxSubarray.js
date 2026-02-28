// Given an integer array nums, find the subarray with the largest sum, and return its sum.

let nums = [-2,1,-3,4,-1,2,1,-5,4], currSum = nums[0], maxSum = nums[0];

for(let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], nums[i]+currSum);
    maxSum = Math.max(currSum, maxSum);
}

console.log(maxSum);
