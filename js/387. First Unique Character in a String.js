/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function (s) {
    const string = s;
    let mySet = new Set()
    for (let i = 0; i < string.length; i++) {
        if (mySet.has(string.charAt(i))) continue
        const regexp = new RegExp(string.charAt(i), "g")
        const matched = [...string.matchAll(regexp)]
        if (matched.length === 1) return i
        mySet.add(string.charAt(i))
    }
    return -1
};

const string = "dccabaxbbcadcacdadcadcdacadtacbadcaddadd";
console.log(firstUniqChar(string))





