// src/queryParser.js

// Function to parse SQL query string
function parseQuery(query) {
    // Regular expressions to match SELECT fields and FROM table name
    const selectRegex = /SELECT\s+([\w, ]+)\s+FROM/i;
    const fromRegex = /FROM\s+([\w]+)/i;

    // Extract SELECT fields and FROM table name using regex
    const selectMatch = query.match(selectRegex);
    const fromMatch = query.match(fromRegex);

    // If both SELECT fields and FROM table name are found
    if (selectMatch && fromMatch) {
        const fields = selectMatch[1].split(',').map(field => field.trim());
        const tableName = fromMatch[1].trim();
        return { fields, tableName };
    } else {
        // If SELECT fields or FROM table name are not found, return null
        return null;
    }
}

module.exports = {
    parseQuery
};
