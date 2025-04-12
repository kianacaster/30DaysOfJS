/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let currentValue = init;

    const output = {
        increment: function () {
            return ++currentValue;
        },
        decrement: function () {
            return --currentValue;
        },
        reset: function () {
            currentValue = init;
            return currentValue;
        },
    };

    return output;
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
