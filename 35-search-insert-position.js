// Given a sorted array of distinct integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const example1 = [1, 3, 5, 6];
const example2 = 5;

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];

    if (currNum === target) return i;

    if (currNum > target) return i;

    if (i === nums.length - 1) return i + 1;
  }
};

console.log(searchInsert(example1, example2));
