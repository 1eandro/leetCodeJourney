/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

 var canConstruct = function (ransomNote, magazine) {
    let splittedMagazine = magazine.split('')
    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote.charAt(i)
        let index = splittedMagazine.indexOf(char)
        if (index > -1) {
            splittedMagazine[index] = '.'

        } else {
            return false
        }
    }
    return true
};