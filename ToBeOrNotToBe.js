/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    const output = {
        toBe: function (n) {
            if (val === n) return true;
            else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (n) {
            if (val !== n) return true;
            else {
                throw new Error("Equal");
            }
        },
    };
    return output;
};
console.log(expect(5).toBe(5)); // true
