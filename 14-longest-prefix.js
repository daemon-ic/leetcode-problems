// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];

  const firstWord = strs[0];

  let prefix = "";

  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      const currentWord = strs[j];

      if (currentWord[i] !== firstWord[i]) return prefix;
    }
    prefix += firstWord[i];
  }
  return prefix;
};

console.log(
  longestCommonPrefix([
    "flower",
    "flow",
    "flight",
    "florida",
    "flamingo",
    "flame",
  ])
);
