/** 
 * Recursive check if adjacent vals are sorted
 */
function isSorted(a) {
    function go(i) {
        if (i === 0) return true
        else if (a[i] < a[i - 1]) return false
        else return go(i - 1);
    }

    return go(a.length);
}

console.log(isSorted([1, 3, 0])); // false
