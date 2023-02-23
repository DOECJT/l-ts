import { type Buried, collectTreasure } from './index'

describe(collectTreasure, () => {
  test('treasure', () => {
    const content = 1
    const buried: Buried<unknown> = {
      content,
      type: 'treasure',
    }
    const result = {
      fake: [],
      real: [content],
      scrap: [],
    }

    expect(
      collectTreasure(
        buried,
        (content): content is string => typeof content === 'string',
        (content): content is number => typeof content === 'number',
      ),
    ).toEqual(result)
  })
})
