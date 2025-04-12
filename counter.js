/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let initialValue = n;
    return function(n) {
        if (n !== undefined) {
            initialValue = n-1;
        }
        return initialValue++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */