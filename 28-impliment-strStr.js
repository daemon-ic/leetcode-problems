// Implement strStr().

// Return the index of the first occurrence of needle in haystack,
//or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string?
//This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string.
//This is consistent to C's strstr() and Java's indexOf().

var strStr = function (haystack, needle) {
  if (needle === "") return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) break;
        if (j === needle.length - 1) return i;
      }
    }
  }
  return -1;
};

console.log(
  strStr("this is a random haystack that has the word random twice", "random")
);
