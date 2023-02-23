import { zip } from './index'

describe(zip, () => {
  test.each([
    [
      [
        ['a', 'b', 'c', 'd'],
        [1, 2],
      ],
      ['a', 1, 'b', 2, 'c', 'd'],
    ],
  ])('%j', ([a, b]: unknown[][], result: unknown[]) => {
    expect(zip(a, b)).toEqual(result)
  })
})
