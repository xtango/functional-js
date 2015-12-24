/**
 * Given a set of randomly sorted boarding passes (Source Airport, Destination Airport), find 
 * the initial departure (very first src) and the final destination (last dst) airports.
 * 
 * Assumptions: 
 * - You take a one-way indirect flight trip, not stopping twice at the same airport. 
 * - You have 1 boarding pass for each leg of your trip, each containing source and destination airports.
 * 
 * @example: The result should be: {first: "YVR", last: "HKG"} 
 * for passes = [['JFK', 'ZRH'], ['BOM', 'HKG'], ['YVR', 'JFK'], ['ZRH', 'BOM']]
 */
function findFirstAndLast(passes) {
    var srcs = _.map(passes, _.first);
    var dsts = _.map(passes, _.last);
    return { first: _.difference(srcs, dsts)[0], 
             last: _.difference(dsts, srcs)[0] };
}
console.log(findFirstAndLast(
  [['JFK', 'ZRH'], 
  ['BOM', 'HKG'], 
  ['YVR', 'JFK'], 
  ['ZRH', 'BOM']]));
