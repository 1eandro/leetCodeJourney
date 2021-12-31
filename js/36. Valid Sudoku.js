/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
    let seen = new Set()
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let el = board[i][j]
            if (el !== '.') {
                //row
                if (seen.has('r' + i + el)) { return false } else { seen.add('r' + i + el) }
                //col
                if (seen.has('c' + j + el)) { return false } else { seen.add('c' + j + el) }
                //block
                let curBlock = '' + Math.floor(i / 3) + Math.floor(j / 3)
                if (seen.has('c' + curBlock + el)) { return false } else { seen.add('c' + curBlock + el) }
            }
        }
    }
    return true;
};