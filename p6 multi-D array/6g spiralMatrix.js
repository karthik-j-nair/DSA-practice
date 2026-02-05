// Given an m x n matrix, return all elements of the matrix in spiral order.

//  1 2 3       
//  4 5 6   =>  [1,2,3,6,9,8,7,4,5]
//  7 8 9       

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let spiral = [];

let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;

while (bottom >= top && right >= left) {
    for(let i = left; i <= right; i++){
        spiral.push(matrix[top][i]);
    }
    top++;
    for(let i = top; i <= bottom; i++){
        spiral.push(matrix[i][right]);
    }
    right--;

    if(top <= bottom){
        for(let i = right; i >= left; i--){
            spiral.push(matrix[bottom][i])
        }
        bottom--;
    }

    if(left <= right){
        for(let i = bottom; i >= top; i--){
            spiral.push(matrix[i][left]);
        }
        left++;
    }
}

console.log(spiral);
