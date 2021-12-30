/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if ((nums1[i] === 0 && i > m - 1) || nums1[i] > nums2[j]) {
        nums1.splice(i, 0, nums2[j])
        nums2.shift();
        nums1.pop();
        m++;
      }
      break;
    }
  }
};


console.log(merge([-3, 0, 2, 0, 0], 3, [-2, 1], 2))
console.log(merge([-7, -3, 0, 2, 0, 0, 0, 0], 4, [-8, -5, 1, 4], 4))
console.log(merge([-7, -3, 0, 2, 0, 0, 0, 0, 0], 4, [-8, -5, 0, 1, 4], 5))
console.log(merge([1, 7, 0, 0], 2, [2, 3], 2))
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(merge([141, 149, 287, 504, 553, 674, 690, 716, 829, 847, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 10, [170, 310, 477, 577, 581, 644, 650, 661, 671, 932], 10))

