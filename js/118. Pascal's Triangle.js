/**
 * @param {number} numRows
 * @return {number[][]}
 */

 let getEmptyMatrix = function (numRows) {
    return new Array(numRows).fill().map(() => [])
}

var generate = function (numRows) {
    let matrix = getEmptyMatrix(numRows)
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col <= row; col++) {
            if (col === 0 || col === row) {
                matrix[row][col] = 1
            } else {
                matrix[row][col] = matrix[row - 1][col] + matrix[row - 1][col - 1]
            }
        }
    }
    return matrix
};