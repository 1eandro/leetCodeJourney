/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let leftArray = nums1
  let rightArray = nums2

  for (let i = 0; i < leftArray.length; i++) {
    for (let j = 0; j < rightArray.length; j++) {
      if (leftArray[i] === 0 || leftArray[i] > rightArray[j]) {
        //insert right
        leftArray.splice(i, 0, rightArray[j])
        rightArray.shift();
        leftArray.pop();
      }
      break;
    }
  }

  console.log(leftArray)

};


console.log(merge([1, 7, 0, 0], 2, [2, 3], 2))
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(merge([141, 149, 287, 504, 553, 674, 690, 716, 829, 847, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 10, [170, 310, 477, 577, 581, 644, 650, 661, 671, 932], 10))

