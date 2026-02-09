// Given an array of integers nums and an integer target, your task is to find two distinct indices in the array such that the numbers at these indices add up to target. You are guaranteed that there is exactly one solution, and you cannot use the same element twice.

let num = [2, 3, 5, 7], target = 9;

let map = new Map();

for (let i = 0; i < num.length; i++) {
    if (map.has(target - num[i])) {
        console.log(map.get(target - num[i]), i);
        break
    }
    else {
        map.set(num[i], i);
    }
}