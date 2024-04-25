// tests/index.test.js

const { parseQuery } = require('../../src/queryParser');


test('Parse SQL Query', () => {
    const query = 'SELECT id, name FROM sample';
    const parsed = parseQuery(query);
    expect(parsed).toEqual({
        fields: ['id', 'name'],
        tableName: 'sample' // Adjusted key to match the returned object structure
    });
});
