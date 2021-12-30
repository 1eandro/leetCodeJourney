/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

let isItPossible = function (mat, r, c) {
    return mat.length * mat[0].length === r * c
}

let initNewMat = function (r) {
    let mat = [];
    for (let i = 0; i < r; i++) {
        mat.push([])
    }
    return mat
}

var matrixReshape = function (mat, r, c) {
    if (isItPossible(mat, r, c)) {
        let newMat = initNewMat(r);
        for (let row = 1; row <= r; row++) {
            for (let col = 1; col <= c; col++) {
                let pos = col + c * (row - 1)
                let originalRow = Math.ceil(pos / mat[0].length) - 1
                let originalColumn = (pos % mat[0].length || mat[0].length) - 1
                newMat[row - 1].push(mat[originalRow][originalColumn])
            }
        }
        return newMat
    } else {
        return mat
    }
};

let result = matrixReshape([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]], 12, 1)
// let result = matrixReshape([[1, 2], [3, 4]], 1, 4)

console.log(result)
