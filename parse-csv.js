/**
 * parseCSV: Parses a CSV file into arrays using map and reduce.
 * @example: parseCSV('rank,mountain,meters\n1,Mount Everest,8848\n2,K2,8644');
 * ->
 * ["rank", "mountain", "meters"]
 * ["1", "Mount Everest", "8848"]
 * ["2", "K2", "8644"]
 */
function parseRow(row) {
    return _.map(row.split(","), function (token) {
        return token.trim()
    })
}

function parseCSV(line) {
    return _(line.split("\n"))
        .reduce(function (table, row) {
            table.push(parseRow(row));
            return table;
        }, []);
}

// Try this
// parsed = parseCSV('rank,mountain,meters\n1,Mount Everest,8848\n2,K2,8644');
// parsed.map(function (r) {
//     console.log(r)
// })
