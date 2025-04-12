/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(fn(arr[i]));
    }
    return mappedArray;
};

let test1 = map([1, 2, 3], function plusone(n) {
    return n + 1;
});
console.log(test1);
