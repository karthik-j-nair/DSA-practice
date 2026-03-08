// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.


// we can do it using other method as well given in github 

var findDisappearedNumbers = function(nums) {
    let i = 0;
    while(i < nums.length) {
        let realIdx = nums[i] - 1;
        if(nums[i] !== nums[realIdx]){
            [nums[i], nums[realIdx]] = [nums[realIdx], nums[i]]
        }
        else {
            i++;
        }
    }
    let ans = [];
    for(let i = 0; i < nums.length; i++) {
        if(i+1 !== nums[i]) {
            ans.push(i+1);
        }
    }
    return ans;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))