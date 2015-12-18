/**
 * Tail recursive func to get the nth Fibonacci number.
 * The nth fib number is the sum of the previous two.
 * The first 5 sequence are:  0, 1, 1, 2, 3, 5, so fib(5) is 5.
 */
function fib(n) {
    function loop(n, prev, curr) {
        console.log(n, prev, curr);
        return (n === 0) ? prev : loop(n - 1, curr, curr + prev);
    }
    return loop(n, 0, 1);
}

document.write('->' + fib(5));
