// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.
async function checkEmotion(knownEmotions, emotion) {
  // Simulate database processing time by waiting a second...
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  return knownEmotions.has(emotion)
}

async function test() {
  const has = await checkEmotion(new Set([1]), 1)
  console.log(`has: ${has}`)
}
test()

async function speak(knownEmotions, newEmotion, phrase) {
  if (!await checkEmotion(knownEmotions, newEmotion))
    throw new Error(`Does not compute. I do not understand ${newEmotion}.`)

  return `"${phrase}" (${newEmotion})`
}

module.exports.checkEmotion = checkEmotion
module.exports.speak = speak
