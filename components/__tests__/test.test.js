const sum = (a, b) => a + b

describe('Sample Test', () => {
  let actual
  let expected
  test('should yield 3', () => {
    actual = sum(1, 2)
    expected = 3
    expect(actual).toEqual(expected)
  })
})
