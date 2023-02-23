import { pick } from './index'

describe(pick, () => {
  test.each([
    [
      { a: 1, b: 2 },
      'a',
      1,
    ],
  ])('%p', (container, key, result) => {
    expect(pick(container, key as keyof typeof container)).toEqual(result)
  })
})
