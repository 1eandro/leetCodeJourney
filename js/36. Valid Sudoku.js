/**
 * @param {character[][]} board
 * @return {boolean}
 */


var isValidSudoku = function (board) {

    // check rows
    for (let row = 0; row < board.length; row++) {
        let mySet = new Set()
        for (let col = 0; col < board[row].length; col++) {
            let currentCell = board[row][col]
            if (mySet.has(currentCell) && currentCell !== '.') {
                return false
            } else {
                mySet.add(currentCell)
            }
        }
    }

    // check columns
    for (let col = 0; col < board[0].length; col++) {
        let mySet = new Set()
        for (let row = 0; row < board.length; row++) {
            let currentCell = board[row][col]
            if (mySet.has(currentCell) && currentCell !== '.') {
                return false
            } else {
                mySet.add(currentCell)
            }

        }
    }

    // loop big grid
    for (let gridRow = 0; gridRow < 3; gridRow++) {
        for (let gridCol = 0; gridCol < 3; gridCol++) {
            let mySet = new Set()
            for (let miniGridRow = gridRow * 3; miniGridRow < gridRow * 3 + 3; miniGridRow++) {
                for (let miniGridCol = gridCol * 3; miniGridCol < gridCol * 3 + 3; miniGridCol++) {
                    let currentCell = board[miniGridRow][miniGridCol]
                    if (mySet.has(currentCell) && currentCell !== '.') {
                        return false
                    } else {
                        mySet.add(currentCell)
                    }
                }
            }
        }
    }
    return true
};