// src/index.js

const parseQuery = require('./queryParser');
const readCSV = require('./csvReader');

async function executeSELECTQuery(query) {
    // Check if the query is a SELECT query
    if (!query.toUpperCase().startsWith('SELECT')) {
        throw new Error('Invalid query. Only SELECT queries are supported.');
    }

    try {
        const { fields, table } = parseQuery(query);
        
        // Read the CSV file
        const data = await readCSV(`${table}.csv`);
        
        // Check if CSV file data is available
        if (!data || data.length === 0) {
            throw new Error(`CSV file '${table}.csv' is empty or not found.`);
        }

        // Filter the fields based on the query
        return data.map(row => {
            const filteredRow = {};
            fields.forEach(field => {
                filteredRow[field] = row[field];
            });
            return filteredRow;
        });
    } catch (error) {
        throw new Error(`Error executing SELECT query: ${error.message}`);
    }
}

module.exports = executeSELECTQuery;
