// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

let names = ["Mary", "John", "Emma"], heights = [180, 165, 170];

let map = new Map();

for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i]);
}
heights.sort((a, b) => b - a);
console.log(heights);

let ans = new Array();

for(let i = 0; i < heights.length; i++){
    ans.push(map.get(heights[i]));
}
console.log(ans);
