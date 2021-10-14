// Given a non-empty array of integers nums,
// every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

var singleNumber = function (nums) {
  const lib = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    if (!lib[currentNum]) lib[currentNum] = 0;
    lib[currentNum]++;

    if (lib[currentNum] > 1) delete lib[currentNum];
  }

  const keys = Object.keys(lib);
  return keys[0];
};

console.log(singleNumber([4, 1, 2, 1, 2]));
