import { describe, expect, it } from '@jest/globals'

import * as solution from './index.solution'
import * as index from './index'

const { announceExamplePeople } = process.env.TEST_SOLUTIONS ? solution : index

describe(announceExamplePeople, () => {
  it('does not include its own list of persons', () => {
    expect(announceExamplePeople.toString()).not.toMatch(/historian/)
  })
})
