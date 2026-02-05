// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// 1 2 3         7 4 1
// 4 5 6   =>    8 5 2
// 7 8 9         9 6 3

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let l = matrix.length -1, m = 0;
while(l > m) {

    let temp = matrix[l];
    matrix[l] = matrix[m];
    matrix[m] = temp;
    l--, m++;
}

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (j > i) {
            let temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        };
    }
}
console.log(matrix);
