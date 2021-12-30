
let removeDuplicates = function (array) {
    const map = new Map()
    array.forEach(e => {
        if (!map.has(e)) map.set(e, 1)
    })
    return map
}

let roda = function (nums1, nums2) {

    const theMap = new Map();

    let distinctMap1 = removeDuplicates(nums1)
    let distinctMap2 = removeDuplicates(nums2)
    let answer = []
    distinctMap1.forEach((value, key) => {
        if (distinctMap2.has(key)) answer.push(key);
    })

    return answer

}



let result = roda([1, 2, 3, 5, 6, 7, 8, 8, 8, 8], [1, 3, 4, 4])
console.log(result)
console.log(Array.from(result))