// tests/index.test.js

const executeSELECTQuery = require('../../src/index');


test('Execute SQL Query', async () => {
    const query = 'SELECT id, name FROM sample';
    const result = await executeSELECTQuery(query);

    // Assertions
    expect(result.length).toBeGreaterThan(0); // Check if result is not empty
    expect(result[0]).toHaveProperty('id'); // Check if first row has 'id' property
    expect(result[0]).toHaveProperty('name'); // Check if first row has 'name' property
    expect(result[0]).not.toHaveProperty('age'); // Check if first row does not have 'age' property
    expect(result[0]).toEqual({ id: '1', name: 'John' }); // Check if first row matches expected data
});
