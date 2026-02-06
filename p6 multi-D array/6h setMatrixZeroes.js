// You are given an m×n matrix. If any element in the matrix is 0, set the entire row and column containing that element to 0. This must be done in place, modifying the input matrix directly.

let matrix = [[1,1,1], [1,0,1], [1,1,1]]
let col0 = 1; // it is a different value not matrix[0][0]
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 0) {
            // first row
            matrix[0][j] = 0;
            // first col
            if (j != 0)
                matrix[i][0] = 0;
            else
                col0 = 0;
        }
    }
}

for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0 || matrix[i][0] === 0) matrix[i][j] = 0;
    }
}

if (matrix[0][0] === 0) {
    for (let j = 1; j < matrix[0].length; j++) matrix[0][j] = 0;
}

if (col0 === 0) {
    for (let i = 1; i < matrix.length; i++) matrix[i][0] = 0;
}

console.log(matrix);

