// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

const example1 = [3, 2, 4];
const example2 = 6;

var twoSum = function (nums, target) {
  let obj = {};
  let output = [];

  for (i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      output.push(i, obj[nums[i]]);
      return output;
    }
    obj[target - nums[i]] = i;
  }
};

console.log(twoSum(example1, example2));
