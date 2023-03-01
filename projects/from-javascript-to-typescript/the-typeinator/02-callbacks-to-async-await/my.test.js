const { checkEmotion, speak } = require('./index')

const setAdvancedTime = async (time) => {
  jest.advanceTimersByTime(time)

  await Promise.resolve()
}

describe(checkEmotion, () => {
  const knownEmotions = new Set(['happiness'])
  const emotion = 'angry'

  test('doesn\'t process the emotion before a second', async () => {
    let result
    checkEmotion(knownEmotions, emotion).then(hasEmotion => result = hasEmotion)

    await setAdvancedTime(999)

    expect(result).toBe(undefined)
  })

  test('processes a missing emotion as false after a second', async () => {
    let result
    checkEmotion(knownEmotions, emotion).then(hasEmotion => result = hasEmotion)

    await setAdvancedTime(1000)

    expect(result).toBe(false)
  })

  test('processes a known emotion as true after a second', async () => {
    let result
    checkEmotion(knownEmotions, 'happiness').then(hasEmotion => result = hasEmotion)

    await setAdvancedTime(1000)

    expect(result).toBe(true)
  })
})

describe(speak, () => {
  const knownEmotions = new Set(['happiness'])

  test('rejects if the emotion is not known', async () => {
    const result = speak(
      knownEmotions,
      'anxiety',
      'xixi',
    )
    await setAdvancedTime(1000)
    expect(result).rejects.toThrow(new Error('Does not compute. I do not understand anxiety.'))
  })

  test('returns the phrase and emotion if the emotion is known', async () => {
    const result = speak(
      knownEmotions,
      'happiness',
      'xixi',
    )

    setAdvancedTime(1000)

    expect(result).resolves.toBe('"xixi" (happiness)')
  })
})
