const chunkArray = require('./chunk')

test('array to be chunk', () => {
    const arr = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
    expect(arr).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
})