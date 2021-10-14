// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward
// as forward. For example, 121 is palindrome while 123 is not.

const example = 121232121;

var isPalindrome = function (x) {
  const xString = "" + x;
  let reverse = "";

  for (let i = xString.length - 1; i >= 0; i--) {
    reverse += xString[i];
  }
  return reverse === xString ? true : false;
};

console.log(isPalindrome(example));
  