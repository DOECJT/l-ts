// Write your class and functions here! ✨
// You'll need to export the class and functions so the tests can run it.
export interface Consumed {
  evil: boolean
  name: string
  power: number
}

export interface Options {
  name: string
  isEvil: () => boolean
  getPowerFrom: (consumed: Consumed) => number
}

export class Horror {
  name: string
  isEvil: Options['isEvil']
  getPowerFrom: Options['getPowerFrom']
  #consumed: Consumed[] = []

  constructor(options: Options) {
    this.name = options.name
    this.isEvil = options.isEvil
    this.getPowerFrom = options.getPowerFrom
  }

  #consume(opponent: Horror) {
    this.#consumed.push({
      evil: opponent.isEvil(),
      name: opponent.name,
      power: opponent.getPower(),
    })
  }

  public doBattle(opponent: Horror) {
    if (this.getPower() >= opponent.getPower())
      this.#consume(opponent)
  }

  public getPower(): number {
    return this.#consumed.reduce(
      (accu, curr) => accu + this.getPowerFrom(curr),
      this.#consumed.length,
    )
  }
}

export function createDemon() {
  return new Horror({
    name: 'Demon',
    isEvil: () => true,
    getPowerFrom(consumed: Consumed) {
      return consumed.evil ? consumed.power / 2 : consumed.power * 2
    },
  })
}

export function createSorcerer(name: string, evil: boolean) {
  return new Horror({
    name,
    isEvil: () => evil,
    getPowerFrom(consumed) {
      return consumed.evil === evil ? consumed.power * 2 : consumed.power
    },
  })
}
