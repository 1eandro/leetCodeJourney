/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let addToMap = function (array) {
    map = new Map()
    array.forEach(e => {
        if (map.has(e)) {
            map.set(e, map.get(e) + 1)
        } else {
            map.set(e, 1)
        }
    })
    return map
}

let addNTimes = function (array, value, times) {
    for (let index = 0; index < times; index++) {
        array.push(value)
    }
}

var intersect = function (nums1, nums2) {

    let map1 = addToMap(nums1)
    let map2 = addToMap(nums2)
    let answer = new Array()
    map1.forEach((value, key) => {
        if (map2.has(key)) {
            let max = value > map2.get(key) ? value : map2.get(key)
            let difference = Math.abs(value - map2.get(key));
            let timesToAdd = (max - difference) * 2
            addNTimes(answer,key, timesToAdd)
        }
    })

    return answer
};

console.log(intersect([1, 2, 3, 4, 5,5,5], [1, 1, 1,5,5]))
// console.log(intersect([1, 2, 3, 5, 6, 7, 8, 8, 8, 8], [1, 3, 4, 4]))







