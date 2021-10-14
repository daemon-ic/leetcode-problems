// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

const example = "MCMXCIV";

var romanToInt = function (s) {
  const convert = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const thisChar = s[i];
    const nextChar = s[i + 1];
    const thisValue = convert[thisChar];
    const nextValue = convert[nextChar];

    if (nextValue && nextValue > thisValue) {
      sum += convert[thisChar + nextChar];
      i++;
    } else {
      sum += thisValue;
    }
  }

  return sum;
};

console.log(romanToInt(example));

