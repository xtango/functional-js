/**
 * You take a one-way indirect flight trip, not stopping twice at the same airport. 
 * You have 1 boarding pass for each leg of your trip, each containing source and destination airports.
 * All the boarding passes are randomly sorted.
 * Find the initial departure (very first src) and the final destination (last dst) airports.
 */
function findFirstAndLast(passes) {
    var srcs = passes.map(function(x) { return x[0]});
    var dsts = passes.map(function(x) { return x[1]});
    return { first: _.difference(srcs, dsts)[0], 
             last: _.difference(dsts, srcs)[0] };
}
console.log(findFirstAndLast(
  [['JFK', 'ZRH'], 
  ['BOM', 'HKG'], 
  ['YVR', 'JFK'], 
  ['ZRH', 'BOM']]));
