import { pickMany } from './index'

describe(pickMany, () => {
  test.each([
    [
      { a: 1, b: 2, c: 3 },
      ['a', 'c'],
      [1, 3],
    ],
  ])('%j', (container, keys, result) => {
    expect(pickMany(container, keys as (keyof typeof container)[])).toEqual(result)
  })
})
