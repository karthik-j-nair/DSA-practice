// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

var sortArrayByParity = function (nums) {
    let i = 0, j = nums.length - 1;
    while (i < j) {
        if (nums[i] % 2 !== 0 && nums[j] % 2 === 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++, j--;
        }
        else if (nums[j] % 2 !== 0) {
            j--
        }
        else {
            i++
        }

    }
    return nums;
};

console.log(sortArrayByParity([3,1,2,4]));
