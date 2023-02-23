// Write your collectTreasure function here! ✨
// You'll need to export it so the tests can run it.
export interface Catacomb<T> {
  inside: Buried<T>
  type: 'catacomb'
}

export interface TunnelSystem<T> {
  entrances: Buried<T>[]
  type: 'tunnels'
}

export type NextArea<T> = Catacomb<T> | TunnelSystem<T>

export interface Treasure<T> {
  content: T
  type: 'treasure'
}

export type Buried<T> = Buried<T>[] | NextArea<T> | Treasure<T>

export function collectTreasure<Content, Fake extends Content, Real extends Content>(
  buried: Buried<Content>,
  isFake: (content: Content) => content is Fake,
  isReal: (content: Content) => content is Real,
) {
  const fake: Fake[] = []
  const real: Real[] = []
  const scrap: unknown[] = []

  const helper = (buried: Buried<Content>) => {
    if (Array.isArray(buried)) {
      buried.forEach(item => helper(item))
    }
    else if (buried.type === 'catacomb') {
      helper(buried.inside)
    }
    else if (buried.type === 'tunnels') {
      buried.entrances.forEach(item => helper(item))
    }
    else if (buried.type === 'treasure') {
      if (isFake(buried.content))
        fake.push(buried.content)
      else if (isReal(buried.content))
        real.push(buried.content)
      else
        scrap.push(buried.content)
    }
  }
  helper(buried)

  return {
    fake,
    real,
    scrap,
  }
}
