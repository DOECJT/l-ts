// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.
export type Coordinate = [number, number, number]

export interface Coordinates {
  north: Coordinate
  west: Coordinate
}

export interface City {
  name: string
  coordinates: Coordinates
  catchphrase?: string
}

function describeUnit(unit: number) {
  return `${unit}`.padStart(2, '0')
}

function describeCoordinate(coordinate: Coordinate) {
  return [
    `${describeUnit(coordinate[0])}°`,
    `${describeUnit(coordinate[1])}'`,
    `${describeUnit(coordinate[2])}"`,
  ].join('')
}

export function describeCity({ coordinates, name, catchphrase }: City) {
  const { north, west } = coordinates

  const lines: string[] = []

  lines.push(`${name}, New York`)
  if (catchphrase)
    lines.push(`* "${catchphrase}"`)

  lines.push(`* Located at ${describeCoordinate(north)}N ${describeCoordinate(west)}W`)

  return lines.join('\n')
}
