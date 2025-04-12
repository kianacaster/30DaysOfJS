/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
};

let test1 = filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
});
console.log(test1);
