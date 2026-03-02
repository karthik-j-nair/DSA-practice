// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.


function trap(height) {
    
    //better approach
    // let left = new Array(height.length), right = new Array(height.length), leftMax = height[0], rightMax = height[height.length - 1], total = 0;

    // for (let i = 0; i < height.length; i++) {
    //     leftMax = Math.max(leftMax, height[i]);
    //     left[i] = leftMax;
    // }

    // for (let i = height.length - 1; i >= 0; i--) {
    //     rightMax = Math.max(rightMax, height[i]);
    //     right[i] = rightMax;
    // }

    // for(let i = 0; i < height.length; i++){
    //     total += Math.min(right[i], left[i]) - height[i];
    // }

    // return total;


    // optimal (sheryians advanced array part 9)
    let left = 0, right = height.length - 1, rightMax = 0, leftMax = 0, total = 0;
    while(left < right){
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        if(leftMax < rightMax){
            total += leftMax - height[left];
            left++;
        }
        else {
            total += rightMax - height[right];
            right--;
        }
    }

    return total;
}

console.log(trap([4,2,0,3,2,5]));
