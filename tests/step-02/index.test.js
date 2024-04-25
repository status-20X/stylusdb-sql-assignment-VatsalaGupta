// tests/index.test.js

const readCSV = require('../../src/csvReader');


test('Read CSV File', async () => {
    const data = await readCSV('./sample.csv');

    // Assertions
    expect(data.length).toBeGreaterThan(0); // Check if data is not empty
    expect(data.length).toBe(3); // Check if data has 3 rows (assuming sample.csv has 3 rows)
    
    // Assuming the CSV file has 'name' and 'age' columns
    expect(data[0].name).toBe('John'); // Check if the first row has the correct name
    expect(parseInt(data[0].age)).toBe(30); // Check if the first row has the correct age (parsed as integer)
});
