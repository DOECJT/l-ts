// Write your announceCharacter function here! ✨
// You'll need to export it so the tests can run it.
export interface Character {
  name: string
  powers: string[]
  side: 'evil' | 'good'
}

export function announceCharacter(raw: string) {
  const character = JSON.parse(raw) as Character
  const { name, powers, side } = character

  const lines = [
    `I am ${name}.`,
    `My powers are: ${powers.join(', ')}.`,
    `I am ${side}.`,
  ]
  lines.forEach((line) => {
    console.log(line)
  })

  return character
}
