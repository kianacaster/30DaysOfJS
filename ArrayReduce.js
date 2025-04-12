/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let val = init;
    for (i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};

const test = reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
        return accum + curr;
    },
    0
);

console.log(test);
