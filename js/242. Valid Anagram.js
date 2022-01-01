/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 var isAnagram = function (s, t) {
    let left = s
    let right = t

    if(left.length !== right.length) return false

    for (let i = 0; i < left.length; i++) {
        let curChar = left.charAt(i)
        right = right.replace(curChar, '')
    }

    return right === ''

};


let result = isAnagram("margana", "nagaram")
console.log(result)
//true