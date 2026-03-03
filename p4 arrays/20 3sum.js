// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


var threeSum = function (nums) {
    let ans = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i != 0 && nums[i] == nums[i - 1]) continue;
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                ans.push([nums[i], nums[j++], nums[k]]);
                while (j < k && nums[j] == nums[j - 1]) j++
                // while (j < k && nums[k] == nums[k + 1]) k--
                //here we are just iterating j not k 
            }
            else if (sum < 0) j++
            else k--
        }
    }
    return ans;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
