// You are given a mxn matrix. Your task is to return the transpose of the matrix. The transpose is formed by swapping the rows and columns of the matrix.

let matrix = [[1, 2], [3, 4], [5, 6]];

let col = matrix[0].length, row = matrix.length;
let arr = new Array(col);

for (let i = 0; i < col; i++) {
    arr[i] = new Array(row);
}

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        arr[j][i] = matrix[i][j];
    }
}

console.log(arr);
