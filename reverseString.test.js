const reverseString = require('./reverseString')

test('str toBe reverse', () =>{
    const str = 'test'
    expect(reverseString(str)).toBe('tset');
})

test('str toBe reverse', () =>{
    const str = 'test'
    expect(reverseString(str)).not.toBe('test');
})