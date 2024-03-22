const isAnagram= require('./anagram')

test('test should return anagram', () => {
    const str1 = 'abc'
    const str2 = 'cba'

    expect(isAnagram(str1, str2)).toBe(true)
})

test('test should return anagram', () => {
    const str1 = 'abc'
    const str2 = 'cba'

    expect(isAnagram(str1, str2)).not.toBe(false)
})