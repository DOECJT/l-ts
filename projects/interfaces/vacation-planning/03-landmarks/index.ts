// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.
// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.
export interface BaseLandmark {
  name: string
  type: string
}
export interface Fort extends BaseLandmark {
  type: 'fort'
}
export interface Lake extends BaseLandmark {
  type: 'lake'
  miles: number
}
export interface Lighthouse extends BaseLandmark {
  type: 'lighthouse'
  lit: number
  height: number
}
export interface Mountain extends BaseLandmark {
  type: 'mountain'
  height: number
}
export interface Park extends BaseLandmark {
  type: 'park'
  acres: number
}
export interface River extends BaseLandmark {
  type: 'river'
  length: number
  depth: number
}
export interface Waterfall extends BaseLandmark {
  type: 'waterfall'
  height: number
}

export type Landmark = Fort | Lake | Lighthouse | Mountain | Park | River | Waterfall

export function describeLandmark(landmark: Landmark) {
  const { name, type } = landmark

  const lines: string[] = []
  const firstLine = `${name} is a ${type} in Upstate New York.`
  let secondLine: string | undefined
  if (type === 'lake')
    secondLine = `It covers ${landmark.miles} square miles of water.`
  else if (type === 'lighthouse')
    secondLine = `It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`
  else if (type === 'mountain')
    secondLine = `Its peak is ${landmark.height} feet high.`
  else if (type === 'park')
    secondLine = `It covers ${landmark.acres} square acres.`
  else if (type === 'river')
    secondLine = `It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`
  else if (type === 'waterfall')
    secondLine = `It is ${landmark.height} feet high.`

  lines.push(firstLine)
  if (secondLine)
    lines.push(secondLine)

  return lines.join('\n')
}
