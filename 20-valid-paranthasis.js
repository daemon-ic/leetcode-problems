// Given a string s containing just the characters
// '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const example = "()()(){}[[][()]]";

var isValid = function (s) {
  let queue = "";

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];
    const latestBracketEntered = queue[queue.length - 1];

    if (
      currentBracket === "(" ||
      currentBracket === "[" ||
      currentBracket === "{"
    ) {
      queue += currentBracket;

      s = s.slice(0, i) + s.slice(i + 1);
      i--;
      continue;
    }

    if (
      (currentBracket === ")" && latestBracketEntered === "(") ||
      (currentBracket === "]" && latestBracketEntered === "[") ||
      (currentBracket === "}" && latestBracketEntered === "{")
    ) {
      queue = queue.slice(0, -1);
      s = s.slice(0, i) + s.slice(i + 1);
      i--;
    }
  }
  return queue === "" && s === "" ? true : false;
};

console.log(isValid(example));
