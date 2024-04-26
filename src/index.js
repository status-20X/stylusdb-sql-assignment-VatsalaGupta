
const parseQuery = require('./queryParser');
const readCSV = require('./csvReader');

async function executeSELECTQuery(query) {
    try {
        const { fields, table } = parseQuery(query);
        const data = await readCSV(`${table}.csv`);
        
        // Filter the fields based on the query
        return data.map(row => {
            const filteredRow = {};
            fields.forEach(field => {
                filteredRow[field] = row[field];
            });
            return filteredRow;
        });
    } catch (error) {
        // Handle file not found error
        console.error("Error: File not found or table does not exist");
        return [];
    }
}

module.exports = executeSELECTQuery;