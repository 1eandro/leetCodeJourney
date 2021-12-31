/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

let binarySearch = function (arr, target) {

    let begin = 0
    let end = arr.length - 1;
    let midpoint

    while (begin <= end) {
        midpoint = Math.floor(((end - begin) + 1) / 2) + begin
        if (arr[midpoint] == target) return true
        if (arr[midpoint] < target) begin = midpoint + 1
        if (arr[midpoint] > target) end = midpoint - 1
    }

    return false
}

var searchMatrix = function (matrix, target) {

    // one line matrix
    if (matrix.length == 1) {
        return binarySearch(matrix[0], target)
    }

    // multiple line matrix
    for (let i = 0; i < matrix.length - 1; i++) {
        if (matrix[i + 1][0] > target) {
            return binarySearch(matrix[i], target)
        } else {
            continue
        }
    }

    // last line
    return binarySearch(matrix[matrix.length - 1], target)

}