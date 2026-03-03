// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

function maxArea(height) {
    // implement logic here
    let max = 0, i = 0, j = height.length - 1;
    while (i < j) {
        let length = Math.min(height[i], height[j]), breadth = j - i;

        let area = length * breadth;

        max = Math.max(area, max);

        if (height[i] < height[j]) i++;
        else j--;

    }
    return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
