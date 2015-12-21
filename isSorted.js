/** 
 * isSortedSimple: Recursive check if adjacent numbers are sorted
 */
function isSortedSimple(a) {
    function go(i) {
        if (i === 0) return true
        else if (a[i] < a[i - 1]) return false
        else return go(i - 1);
    }

    return go(a.length);
}

console.log(isSortedSimple([1, 2, 3])); // true
console.log(isSortedSimple([1, 3, 0])); // false



/**
 * isSorted: Similar to isSortedSimple, but takes a lessThan comparison func.
 */
function isSorted(a, lessThan) {
    function go(i) {
        console.log('go: a[i]', a[i]);
        if (i === 0) return true
        else if (lessThan(a[i], a[i - 1])) return false
        else return go(i - 1);
    }

    return go(a.length - 1);
}

var cities = [
    { name: 'NYC', size: 20},
    { name: 'LDN', size: 5 }
];

res = isSorted(cities, function (c1, c2) {
    return c1.size <= c2.size
});
console.log(res); // -> false