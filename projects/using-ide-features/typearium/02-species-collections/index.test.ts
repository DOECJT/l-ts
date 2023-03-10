import { describe, expect, it } from '@jest/globals'

import * as solution from './index.solution'
import * as index from './index'

const { getEverything } = process.env.TEST_SOLUTIONS ? solution : index

describe(getEverything, () => {
  it('returns nothing with no settings', () => {
    expect(getEverything()).toMatchInlineSnapshot('Array []')
  })

  it('returns everything with all settings', () => {
    expect(
      getEverything({
        fauna: {
          mammals: {
            cute: true,
            deadly: true,
          },

          reptiles: {
            ferocious: true,
            small: true,
          },
        },

        flora: {
          flowers: {
            colorful: true,
            prickly: true,
          },

          trees: {
            evergreen: true,
            fruitBearing: true,
          },
        },
      }),
    ).toMatchInlineSnapshot(`
		Array [
		  "cats",
		  "dogs",
		  "monty python rabbit",
		  "lion",
		  "tiger",
		  "dragon",
		  "frog",
		  "gecko",
		  "carnation",
		  "lilac",
		  "tulip",
		  "rose",
		  "pine",
		  "apple",
		  "pear",
		]
	`)
  })
})
