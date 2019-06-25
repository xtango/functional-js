/**
 * Returns the DIFFERENCE of 2 arrays, i.e a MINUS b.
 */
const minus = (a, b) => {
    return a.filter(x => b.indexOf(x) === -1);
}

/**
 * Returns a INTERSECT b of the two arrays.
 */
const intersect = (a, b) => {
    return a.filter(x => b.indexOf(x) > -1);
}

/**
 * Returns a DISTINCT UNION b of the two arrays.
 */
const union = (a, b) => {
    const concatenated = [...a, ...b];
    const concatenatedSet = new Set(concatenated); // Set makes it unique
    const concatenatedArr = [...concatenatedSet];
    return concatenatedArr.sort();
}

/**
 * Tests
 */
const ALL = 'abcdefghijklmnopqrstuvwxyz'.split('');
const diff = minus(ALL, 'hello'.split('')).join('');
console.log(diff === 'abcdfgijkmnpqrstuvwxyz' ? 'Passed' : 'Failed');

const inter = intersect(ALL, 'hello'.split('')).join('');
console.log(inter === 'ehlo' ? 'Passed' : 'Failed');

const u = union('bab'.split(''), 'bcd'.split('')).join('');
console.log(u === 'abcd' ? 'Passed' : 'Failed');
