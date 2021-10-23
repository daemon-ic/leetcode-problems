// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps.
//  In how many distinct ways can you climb to the top?

var climbStairs = function (n, lib = {}) {
  if (n < 2) return 1;

  if (!lib[n]) {
    lib[n] = climbStairs(n - 1, lib) + climbStairs(n - 2, lib);
    return climbStairs(n - 1, lib) + climbStairs(n - 2, lib);
  }

  if (lib[n]) return lib[n];
};

console.log(climbStairs(100));
