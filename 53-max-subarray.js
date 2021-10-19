// Given an integer array nums,
// find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

var badVersion = function (nums) {
  console.log("---");
  let round = 0;
  let highestSum = nums[0];
  while (round <= nums.length) {
    for (let i = 0; i < nums.length - round; i++) {
      if (round === 0) {
        if (highestSum < nums[i]) highestSum = nums[i];
        console.log("current highestNum : ", highestSum);
        continue;
      }
      let additionCounter = 0;
      let tempSum = null;
      while (additionCounter <= round) {
        tempSum += nums[i + additionCounter];
        additionCounter++;
      }
      if (highestSum < tempSum) {
        highestSum = tempSum;
        console.log("current highestNum : ", highestSum);
      }
    }
    round++;
  }
  return highestSum;
};

var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    const prevNum = nums[i - 1];
    const currNum = nums[i];

    // adds the 2
    const sum = currNum + prevNum;

    if (sum > currNum) {
      nums[i] = sum;
    } else {
      nums[i] = currNum;
    }
  }
  return Math.max(...nums);
};

console.log(maxSubArray([1, 2, -5, 5, 6, 3, 4, 2]));
