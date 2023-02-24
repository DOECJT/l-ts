const { checkEmotion, speak } = require('./index')

describe(checkEmotion, () => {
  test('emotion is not in knownEmotions', async () => {
    const knownEmotions = new Set(['happiness'])
    const emotion = 'angry'

    const has = await checkEmotion(knownEmotions, emotion)

    expect(has).toBe(false)
  })
})
