// Given a square matrix mat, find the sum of its diagonals. The primary diagonal includes numbers from the top-left to the bottom-right. The secondary diagonal includes numbers from the top-right to the bottom-left. If a number appears in both diagonals (which happens in the center of an odd-sized matrix), count it only once.

let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let sum = 0;
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
        if (i == j || (i + j == mat.length - 1)) {
            sum += mat[i][j];
        }
    }
}
console.log(sum);
