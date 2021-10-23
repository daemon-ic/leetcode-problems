// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer,
// the decimal digits are truncated,
// and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator,
// such as pow(x, 0.5) or x ** 0.5.

var mySqrt = function (x) {
  let i = 1;

  while (i * i < x) i++;

  if (i * i > x) return i - 1;

  return i;
};

console.log(mySqrt(145032434234223420));
