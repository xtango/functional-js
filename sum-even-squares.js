/**
 * Sum of Even Squares
 */
function sumEvenSquares(numbers) {
    return _(numbers)
        .filter(function (n) {
            return n % 2 === 0
        })// ECMAScript 2015: n => n % 2 === 0)
        .map(function (n) {
            return n * n
        }) // ECMAScript 2015 n => n * n)
        .sum()
}

// Try this:
// console.log(sumEvenSquares([1,2,3,4,5]));
// ->
