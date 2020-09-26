/**
 * scanl and running
 */
type Accumulating<T> = (acc: T, x: T) => T;

/**
 * Scan Left like Haskell scanl. 
 * 
 * Takes the second argument and the first item of 
 * the list and applies the function f to them, 
 * then feeds the function with this
 * result and the second argument and so on. 
 * 
 * @returns The list of intermediate and final results.
 */
function scanl<T>(xs: T[], f: Accumulating<T>, initial: T): T[] {
    return xs.map((a => e => a = f(a, e))(initial));
}

/**
 * Returns a running total of xs using Scan Left.
 */
const numAdd: Accumulating<number> = (acc: number, x: number) => acc + x;
const runningTotal = (xs: number[]) => scanl(xs, numAdd, 0);

const stringAdd: Accumulating<string> = (acc: string, x: string) => `${acc}${x}`;
const runningString = (xs: string[]) => scanl(xs, stringAdd, '');

/**
 * Test
 */
console.log(runningTotal([3, 20, 7])); //  [3, 23, 30]
console.log(runningString(['a', 'b'])); // ["a", "ab"] 
