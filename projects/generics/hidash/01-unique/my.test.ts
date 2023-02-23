import { unique } from './index'

describe(unique, () => {
  test.each([
    [
      [
        [1, 2, 3],
        [2, 3, 4],
      ],
      [1, 2, 3, 4],
    ],
    [
      [
        ['a', 'b', 'c'],
        ['b', 'c', 'd'],
      ],
      ['a', 'b', 'c', 'd'],
    ],
  ])('%j', (items: unknown[][], result: unknown) => {
    expect(unique(...items)).toEqual(result)
  })
})
